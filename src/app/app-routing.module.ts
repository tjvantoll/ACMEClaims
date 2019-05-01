//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthCallbackComponent } from '@src/app/app-auth-callback.component';
import { AppLayoutViewComponent } from '@src/app/modules/system/app-layout/app-layout.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import * as routeConfig from '@src/app/app-routing.config';

const routes: Routes = [
    {
        path: 'auth-callback',
        component: AppAuthCallbackComponent
    },
    {
        path: '',
        component: AppLayoutViewComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: 'claims',
                loadChildren: '@src/app/modules/claims/claims.module#ClaimsModule'
            }
        ]
    },
    ...routeConfig.config.routes,
    { path: '**', redirectTo: '' }
];

((routeConfig as any).transformRoutes || (routes => {}))(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, (<any>routeConfig.config).extraOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
