///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { AppLayoutViewBaseComponent } from '@src/app/modules/application/app-layout/app-layout.view.base.component';
import { AppLayoutViewComponent } from '@src/app/modules/application/app-layout/app-layout.view.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from '@src/app/core/notification/notification.component';
import { KsToNotificationIconPipe } from '@src/app/core/notification/to-notification-icon.pipe';

import { config, transformConfig } from '@src/app/modules/application/app-layout/app-layout.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        AppLayoutViewBaseComponent,
        AppLayoutViewComponent,
        NotificationComponent,
        KsToNotificationIconPipe,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [NotificationComponent, AppLayoutViewComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class AppLayoutViewModule {}
