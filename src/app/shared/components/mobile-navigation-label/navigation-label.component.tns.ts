///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from '@angular/core';

import { NavigationService } from '@src/app/core/services/navigation.service';

@Component({
    selector: 'ks-navigation-label',
    templateUrl: './navigation-label.component.html'
})
export class KSNavigationLabelComponent {
    @Input()
    public text: string;

    @Input()
    public tapArgs: Array<string>;

    constructor(protected navigationService: NavigationService) { }

    public onItemTap() {
        if (this.tapArgs && this.tapArgs.length) {
            this.navigationService.navigate(this.tapArgs);
        }
    }
}
