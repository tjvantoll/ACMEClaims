///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AppComponent } from '@src/app/app.component';

import { config } from '@src/app/app-routing.config';

const routes: Routes = [
    { path: '', redirectTo: '_app', pathMatch: 'full' },
    {
        path: '_app',
        component: AppComponent,
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        children: [
            {
                path: 'application',
                outlet: 'applicationHomeTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/application/application.module#ApplicationModule'
            }
        ]
    },
    {
        path: 'application',
        loadChildren: '@src/app/modules/application/application.module#ApplicationModule'
    },
    {
        path: 'claims',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        loadChildren: '@src/app/modules/claims/claims.module#ClaimsModule'
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}