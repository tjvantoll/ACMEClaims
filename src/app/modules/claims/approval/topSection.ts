/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional } from '@angular/core';
import { ApprovalViewComponent } from '@src/app/modules/claims/approval/approval.view.component';

@Component({
    selector: 'ks-top-section',
    templateUrl: './topSection.html'
})
export class TopSectionComponent {
    constructor(@Optional() public parent: ApprovalViewComponent) {}
}
