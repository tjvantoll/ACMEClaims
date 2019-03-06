///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { DashboardViewBaseComponent } from '@src/app/modules/claims/dashboard/dashboard.view.base.component';
import { DashboardViewComponent } from '@src/app/modules/claims/dashboard/dashboard.view.component';
import { RouterModule } from '@angular/router';

import { TopSectionComponent } from '@src/app/modules/claims/dashboard/topSection';

import { config, transformConfig } from '@src/app/modules/claims/dashboard/dashboard.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [DashboardViewBaseComponent, DashboardViewComponent, TopSectionComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class DashboardViewModule {}
