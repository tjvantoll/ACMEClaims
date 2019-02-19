///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Directive, OnInit, ElementRef } from '@angular/core';
import { ActionItem, NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { ActivatedRoute } from '@angular/router';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import * as app from 'tns-core-modules/application/application';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';

@Directive({
    // tslint:disable-next-line
    selector: 'ActionBar'
})
export class ActionBarControllerDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private page: Page,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private sideDrawerService: SideDrawerService
    ) {}

    ngOnInit(): void {
        this.page.actionBarHidden = false;

        if (!this.canGoBack()) {
            this.addSideButton();
        } else {
            this.addNavButton();
        }

        if (isAndroid) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, (args: any) => {
                args.cancel = true;

                if (this.canGoBack()) {
                    this.goBack();
                }
            });
        }
    }

    private addNavButton() {
        let backButton = new NavigationButton();
        this.page.actionBar.navigationButton = backButton;

        if (isAndroid) {
            backButton.android.systemIcon = 'ic_menu_back';
        } else {
            this.page.actionBar.navigationButton.visibility = 'collapsed';

            backButton = new ActionItem();
            backButton.text = `${String.fromCharCode(0x2770)} Back`;

            this.page.actionBar.actionItems.addItem(backButton);
        }

        backButton.on('tap', () => this.goBack());
    }

    private addSideButton() {
        if (!this.sideDrawerService.hasSideDrawer) {
            return;
        }

        let btn: any;
        const actionBar = this.el.nativeElement;

        if (isAndroid) {
            btn = new NavigationButton();
            btn.android.systemIcon = 'ic_menu_moreoverflow_normal_holo_dark';
            actionBar.navigationButton = btn;
        } else {
            btn = new ActionItem();
            btn.text = String.fromCharCode(0x2630);
            btn.ios.position = 'left';
            actionBar.actionItems.addItem(btn);
        }

        btn.on('tap', () => this.sideDrawerService.show());
    }

    private canGoBack(activatedRoute: ActivatedRoute = this.activatedRoute) {
        return this.navigationService.canGoBack(activatedRoute);
    }

    private goBack(activatedRoute: ActivatedRoute = this.activatedRoute) {
        return this.navigationService.goBack(activatedRoute);
    }
}
