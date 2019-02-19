///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from '@src/app/modules/application/login/login.view.component';
import { UnauthorizedPageViewComponent } from '@src/app/modules/application/unauthorized-page/unauthorized-page.view.component';

import { config } from '@src/app/modules/application/application-routing.config';

const routes: Routes = [
    {
        path: 'application',
        children: [
            {
                path: 'login',
                component: LoginViewComponent
            },
            {
                path: 'forbidden',
                component: UnauthorizedPageViewComponent
            }
        ]
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule {}
