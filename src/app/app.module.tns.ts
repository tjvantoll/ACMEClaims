///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';

import { config, transformConfig } from '@src/app/app.config';

@Component({
    template: '<page-router-outlet></page-router-outlet>'
})
export class RootComponent {}

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [AppComponent, RootComponent, ...config.declarations],
    imports: [SharedModule, NativeScriptModule, AppRoutingModule, CoreModule, CoreModule.forRoot(), ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [RootComponent, ...config.bootstrap],
    schemas: [NO_ERRORS_SCHEMA, ...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class AppModule {}
