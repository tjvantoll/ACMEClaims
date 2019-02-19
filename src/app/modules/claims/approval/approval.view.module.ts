///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { ApprovalViewBaseComponent } from '@src/app/modules/claims/approval/approval.view.base.component';
import { ApprovalViewComponent } from '@src/app/modules/claims/approval/approval.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/claims/approval/bottomSection';
import { MiddleSectionComponent } from '@src/app/modules/claims/approval/middleSection';
import { TopSectionComponent } from '@src/app/modules/claims/approval/topSection';

import { config, transformConfig } from '@src/app/modules/claims/approval/approval.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        ApprovalViewBaseComponent,
        ApprovalViewComponent,
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
export class ApprovalViewModule {}
