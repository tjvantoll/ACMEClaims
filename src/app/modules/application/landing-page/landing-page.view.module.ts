///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { LandingPageViewBaseComponent } from '@src/app/modules/application/landing-page/landing-page.view.base.component';
import { LandingPageViewComponent } from '@src/app/modules/application/landing-page/landing-page.view.component';
import { RouterModule } from '@angular/router';
import { LandingPageRoutingModule } from '@src/app/modules/application/landing-page/landing-page-routing.module';

import { BottomSectionComponent } from '@src/app/modules/application/landing-page/bottomSection';
import { TopSectionComponent } from '@src/app/modules/application/landing-page/topSection';

import { config, transformConfig } from '@src/app/modules/application/landing-page/landing-page.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        LandingPageViewBaseComponent,
        LandingPageViewComponent,
        BottomSectionComponent,
        TopSectionComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, LandingPageRoutingModule, ...config.imports],
    exports: [BottomSectionComponent, TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class LandingPageViewModule {}
