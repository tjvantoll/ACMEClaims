///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component } from '@angular/core';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';
import { TranslationsProvider } from '@src/app/core/translations.provider';

@Component({
    templateUrl: './application.module.component.html'
})
export class ApplicationModuleComponent {
    constructor(private intlService: IntlService, private translationsProvider: TranslationsProvider) {
        this.translationsProvider.localeChanges.subscribe(locale => {
            (this.intlService as CldrIntlService).localeId = locale;
        });
    }
}
