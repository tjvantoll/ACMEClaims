///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeViewComponent } from '@src/app/modules/application/home/home.view.component';
import { LoginViewComponent } from '@src/app/modules/application/login/login.view.component';
import { RegisterViewComponent } from '@src/app/modules/application/register/register.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/application/application-routing.config';

const routes: Routes = [
    {
        path: 'home',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: HomeViewComponent
    },
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'register',
        component: RegisterViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ApplicationRoutingModule {}
