///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ClaimsModuleComponent } from '@src/app/modules/claims/claims.module.component';
import { ClaimsRoutingModule } from '@src/app/modules/claims/claims-routing.module';
import { AppLayoutViewModule } from '@src/app/modules/application/app-layout/app-layout.view.module';
import { ApprovalViewModule } from '@src/app/modules/claims/approval/approval.view.module';

import { config, transformConfig } from '@src/app/modules/claims/claims.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ClaimsModuleComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, ApprovalViewModule, ClaimsRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ClaimsModule {}
