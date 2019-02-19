///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { ApplicationRoutingModule } from '@src/app/modules/application/application-routing.module';

import { HomeViewComponent } from '@src/app/modules/application/home/home.view.component';
import { LoginViewComponent } from '@src/app/modules/application/login/login.view.component';
import { RegisterViewComponent } from '@src/app/modules/application/register/register.view.component';

import { config, transformConfig } from '@src/app/modules/application/application.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [HomeViewComponent, LoginViewComponent, RegisterViewComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, ApplicationRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ApplicationModule {}
