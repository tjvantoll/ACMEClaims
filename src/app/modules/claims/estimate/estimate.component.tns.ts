//-------------------------------------------------------------------------
// Write your custom logic for EstimateViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { EstimateViewBaseComponent } from '@src/app/modules/claims/estimate/estimate.base.component';

export class EstimateViewComponent extends EstimateViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
