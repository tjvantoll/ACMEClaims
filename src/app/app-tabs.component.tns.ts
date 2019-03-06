///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { isIOS } from 'tns-core-modules/ui/page';
import { KinveyStudio } from '@src/app/core/kinvey-studio.config';

@Component({
    templateUrl: 'app-tabs.component.html'
})
export class AppTabsComponent implements AfterViewInit {
    @ViewChild('tabView')
    tabView: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private navigationService: NavigationService, page: Page) {
        page.actionBarHidden = true;
    }

    ngAfterViewInit(): void {
        const outlets = {
            claimsChatTab: ['claims', 'chat'],
            claimsClaimsTab: ['claims', 'claims']
        };

        this.navigationService.navigate([{ outlets }], { relativeTo: this.activatedRoute });
    }

    onLoaded(): void {
        KinveyStudio.init();

        if (isIOS) {
            const tabBar = this.tabView.nativeElement.ios.tabBar;
            const controllers = this.tabView.nativeElement.ios.viewControllers;

            tabBar.itemPositioning = UITabBarItemPositioning.Centered;

            for (let i = 0; i < controllers.count; i++) {
                controllers[i].tabBarItem.titlePositionAdjustment = { vertical: -16 };
            }
        }
    }
}
