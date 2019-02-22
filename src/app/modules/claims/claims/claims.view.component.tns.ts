/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { ClaimsViewBaseComponent } from '@src/app/modules/claims/claims/claims.view.base.component';

export class ClaimsViewComponent extends ClaimsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
