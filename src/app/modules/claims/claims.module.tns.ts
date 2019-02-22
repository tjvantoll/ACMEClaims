///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { ClaimsRoutingModule } from '@src/app/modules/claims/claims-routing.module';

import { ChatViewComponent } from '@src/app/modules/claims/chat/chat.view.component';
import { ClaimsViewComponent } from '@src/app/modules/claims/claims/claims.view.component';

import { config, transformConfig } from '@src/app/modules/claims/claims.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ChatViewComponent, ClaimsViewComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, ClaimsRoutingModule, ...config.imports],
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
