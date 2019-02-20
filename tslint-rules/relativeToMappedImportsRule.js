"use strict";
var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) ||
            function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    }
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var path_1 = require("path");
var OPTION_ALLOW_SIBLINGS = 'allow-siblings';
var FAILURE_BODY_RELATIVE = 'module is being loaded from a relative path. Please use an absolute path';
var FAILURE_BODY_SIBLINGS = 'module path starts with reference to parent directory. Please use an absolute path or sibling files/folders';
var FAILURE_BODY_INSIDE = 'module path should not contain reference to current or parent directory inside';
// Looks for path separator `/` or `\\`(Windows style)
// followed than one or two dot characters
// followed by path separator (same as initial).
var illegalInsideRegex = /(\/|\\)\.\.?\1/;
var Rule = /** @class */ (function(_super) {
    __extends(Rule, _super);

    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    //     return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    // }
    Rule.prototype.applyWithProgram = function(sourceFile, program) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions(), program));
    };
    Rule.prototype.parseOptions = function(options, program) {
        var compilerOptions = program.getCompilerOptions();
        var baseUrl = compilerOptions.baseUrl;
        if (!baseUrl.endsWith('/')) {
            baseUrl = baseUrl + '/';
        }
        var paths = compilerOptions.paths;
        var mapping = Object.keys(paths)[0].replace('*', '');
        var entries = Object.entries(paths);
        var isMobileMapping = function(path) {
            return ['tns', 'android', 'ios'].some(function(platform) {
                return path.includes(platform);
            });
        };
        var isWebMapping = function(path) {
            return path.includes('web');
        };
        var platformEntry = entries.find(function(entry) {
            var platforms = entry[1];
            if (platforms.some(function(platform) {
                    return isMobileMapping(platform) || isWebMapping(platform);
                })) {
                // entry[0] -> @src/*
                // entry[1] -> [src/*.web, src/*]
                return true;
            }
        });
        var platformRemapFn = function(relativePath) {
            var basePath = path_1.join(baseUrl, platformEntry[1][0].substr(0, platformEntry[1][0].indexOf('*')));
            return relativePath.replace(basePath, platformEntry[0].substr(0, platformEntry[0].indexOf('*')));
        };
        return {
            allowSiblings: options.ruleArguments.indexOf(OPTION_ALLOW_SIBLINGS) > -1,
            platformRemapFn: platformRemapFn
        };
    };
    Rule.metadata = {
        ruleName: 'relative-to-mapped-imports',
        type: 'maintainability',
        description: 'Do not use relative paths when importing external modules or ES6 import declarations',
        options: {
            type: 'array',
            items: {
                type: 'string',
                "enum": [OPTION_ALLOW_SIBLINGS]
            },
            minLength: 0,
            maxLength: 1
        },
        optionsDescription: "One argument may be optionally provided: \n\n' +\n            '* `" + OPTION_ALLOW_SIBLINGS +
            "` allows relative imports for files in the same or nested folders.",
        typescriptOnly: false,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        commonWeaknessEnumeration: '710'
    };
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;

function walk(ctx) {
    var dirname = path_1.dirname(ctx.sourceFile.fileName);
    var _a = ctx.options,
        allowSiblings = _a.allowSiblings,
        platformRemapFn = _a.platformRemapFn;

    function getValidationErrorBody(expression) {
        if (tsutils.isStringLiteral(expression)) {
            var path = expression.text;
            // when no siblings allowed path cannot start with '.' (relative)
            if (!allowSiblings && path[0] === '.') {
                return FAILURE_BODY_RELATIVE;
            }
            // when siblings allowed path cannot start '..' (reference to parent directory)
            if (allowSiblings && path.indexOf('..') === 0) {
                return FAILURE_BODY_SIBLINGS;
            }
            // '/../' and '/./' are always disallowed in the middle of module path
            if (illegalInsideRegex.test(path)) {
                return FAILURE_BODY_INSIDE;
            }
        }
        // explicitly return undefined when path is valid or not a literal
        return undefined;
    }

    function cb(node) {
        if (tsutils.isExternalModuleReference(node)) {
            var errorBody = getValidationErrorBody(node.expression);
            if (errorBody !== undefined) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), "External " + errorBody + ": " + node.getText());
            }
        } else if (tsutils.isImportDeclaration(node)) {
            var errorBody = getValidationErrorBody(node.moduleSpecifier);
            if (errorBody !== undefined) {
                var moduleSpecifier = node.moduleSpecifier;
                var imp = moduleSpecifier.getText().substr(1, moduleSpecifier.getText().length - 2);
                var absoluteModuleSpecifierPath = path_1.join(dirname, imp);
                var remappedImport = "'" + platformRemapFn(absoluteModuleSpecifierPath) + "'";
                var fix = new Lint.Replacement(moduleSpecifier.getStart(), moduleSpecifier.getWidth(), remappedImport);
                ctx.addFailureAt(node.getStart(), node.getWidth(), "Imported " + errorBody + ": " + node.getText(), fix);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}