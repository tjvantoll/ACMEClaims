///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ChatViewComponent } from '@src/app/modules/claims/chat/chat.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/claims/claims-routing.config';

const routes: Routes = [
    {
        path: 'chat',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: ChatViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClaimsRoutingModule {}
