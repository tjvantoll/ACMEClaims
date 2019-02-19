///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { ApiKeyViewBaseComponent } from '@src/app/modules/application/api-key/api-key.view.base.component';
import { ApiKeyViewComponent } from '@src/app/modules/application/api-key/api-key.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/application/api-key/bottomSection';
import { MiddleSectionComponent } from '@src/app/modules/application/api-key/middleSection';
import { TopSectionComponent } from '@src/app/modules/application/api-key/topSection';

import { config, transformConfig } from '@src/app/modules/application/api-key/api-key.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        ApiKeyViewBaseComponent,
        ApiKeyViewComponent,
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
export class ApiKeyViewModule {}
