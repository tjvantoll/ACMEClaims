///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { UnauthorizedPageViewBaseComponent } from '@src/app/modules/application/unauthorized-page/unauthorized-page.view.base.component';
import { UnauthorizedPageViewComponent } from '@src/app/modules/application/unauthorized-page/unauthorized-page.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/application/unauthorized-page/bottomSection';
import { TopSectionComponent } from '@src/app/modules/application/unauthorized-page/topSection';

import { config, transformConfig } from '@src/app/modules/application/unauthorized-page/unauthorized-page.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        UnauthorizedPageViewBaseComponent,
        UnauthorizedPageViewComponent,
        BottomSectionComponent,
        TopSectionComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [BottomSectionComponent, TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class UnauthorizedPageViewModule {}
