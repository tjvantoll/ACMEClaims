//-------------------------------------------------------------------------
// Write your custom logic for TopSectionComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, Optional } from '@angular/core';
import { ApprovalViewComponent } from '@src/app/modules/claims/approval/approval.component';

@Component({
    selector: 'ks-top-section',
    templateUrl: './top-section.component.html',
})
export class TopSectionComponent {
    constructor(@Optional() public parent: ApprovalViewComponent) {
    }
}
