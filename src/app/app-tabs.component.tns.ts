///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { NavigationService } from '@src/app/core/services/navigation.service';

@Component({
    templateUrl: 'app-tabs.component.html'
})
export class AppTabsComponent implements AfterViewInit {
    constructor(private activatedRoute: ActivatedRoute, private navigationService: NavigationService, page: Page) {
        page.actionBarHidden = true;
    }

    ngAfterViewInit(): void {
        const outlets = {
            applicationHomeTab: ['application', 'home']
        };

        this.navigationService.navigate([{ outlets }], { relativeTo: this.activatedRoute });
    }
}
