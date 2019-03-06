///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsModuleComponent } from '@src/app/modules/claims/claims.module.component';
import { ApprovalViewComponent } from '@src/app/modules/claims/approval/approval.view.component';
import { DashboardViewComponent } from '@src/app/modules/claims/dashboard/dashboard.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthorizationGuardService } from '@src/app/core/auth/authorization-guard.service';

import { config } from '@src/app/modules/claims/claims-routing.config';

const routes: Routes = [
    {
        path: '',
        component: ClaimsModuleComponent,
        canActivate: [AuthenticationGuardService, AuthorizationGuardService],
        canActivateChild: [AuthenticationGuardService],
        data: {
            authorization: {
                allowedRoles: []
            }
        },
        children: [
            {
                path: '',
                redirectTo: 'approval',
                pathMatch: 'full'
            },
            {
                path: 'approval',
                component: ApprovalViewComponent
            },
            {
                path: 'dashboard',
                component: DashboardViewComponent
            }
        ]
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaimsRoutingModule {}
