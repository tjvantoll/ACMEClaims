///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { LoginViewBaseComponent } from '@src/app/modules/application/login/login.view.base.component';
import { LoginViewComponent } from '@src/app/modules/application/login/login.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/application/login/bottomSection';
import { MiddleSectionComponent } from '@src/app/modules/application/login/middleSection';
import { TopSectionComponent } from '@src/app/modules/application/login/topSection';

import { config, transformConfig } from '@src/app/modules/application/login/login.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        LoginViewBaseComponent,
        LoginViewComponent,
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [BottomSectionComponent, MiddleSectionComponent, TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class LoginViewModule {}
