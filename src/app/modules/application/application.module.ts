///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ApplicationModuleComponent } from '@src/app/modules/application/application.module.component';
import { ApplicationRoutingModule } from '@src/app/modules/application/application-routing.module';
import { LandingPageViewModule } from '@src/app/modules/application/landing-page/landing-page.view.module';
import { LoginViewModule } from '@src/app/modules/application/login/login.view.module';
import { UnauthorizedPageViewModule } from '@src/app/modules/application/unauthorized-page/unauthorized-page.view.module';

import { config, transformConfig } from '@src/app/modules/application/application.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ApplicationModuleComponent, ...config.declarations],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        LandingPageViewModule,
        LoginViewModule,
        UnauthorizedPageViewModule,
        ApplicationRoutingModule,
        ...config.imports
    ],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ApplicationModule {}
