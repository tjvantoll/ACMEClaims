//-------------------------------------------------------------------------
// Write your custom logic for ClaimsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { ClaimsViewBaseComponent } from '@src/app/modules/claims/claims/claims.base.component';

export class ClaimsViewComponent extends ClaimsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
