///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable';
import { NavigationService } from '@src/app/core/services/navigation.service';

@Component({
    selector: 'ks-button',
    templateUrl: './button.component.html'
})
export class KSButtonComponent {
    @Input()
    public navigateTo: any;

    constructor(protected navigationService: NavigationService) {}

    public onTap(args: EventData, id: string) {
        if (this.navigateTo && this.navigateTo.module && this.navigateTo.view) {
            const navigatePath = [this.navigateTo.module, this.navigateTo.view];
            if (id) {
                navigatePath.push(id);
            }

            this.navigationService.navigate(navigatePath);
        }
    }
}
