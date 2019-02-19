/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional } from '@angular/core';
import { LandingPageViewComponent } from '@src/app/modules/application/landing-page/landing-page.view.component';

@Component({
    selector: 'ks-top-section',
    templateUrl: './topSection.html'
})
export class TopSectionComponent {
    constructor(@Optional() public parent: LandingPageViewComponent) {}
}
