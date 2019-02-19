/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { LoginViewBaseComponent } from '@src/app/modules/application/login/login.view.base.component';

export class LoginViewComponent extends LoginViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
