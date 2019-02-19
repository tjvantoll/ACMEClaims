///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, AfterViewInit, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';

@Component({
    templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {
    private activatedRoute: ActivatedRoute;
    private authenticationService: AuthenticationService;
    private navigationService: NavigationService;
    private sideDrawerService: SideDrawerService;

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    constructor(public injector: Injector) {
        injector.get(Page).actionBarHidden = true;

        this.activatedRoute = injector.get(ActivatedRoute);
        this.authenticationService = injector.get(AuthenticationService);
        this.navigationService = injector.get(NavigationService);
        this.sideDrawerService = injector.get(SideDrawerService);
    }

    logout() {
        this.sideDrawerService.close();
        this.authenticationService.signOut().subscribe(() => {
            this.authenticationService.authenticate('/');
        });
    }

    open(path: string) {
        this.sideDrawerService.close();
        this.navigationService.navigate([path]);
    }

    public ngAfterViewInit(): void {
        const outlets = {
            applicationHomeTab: ['application', 'home']
        };

        this.navigationService.navigate([{ outlets }], { relativeTo: this.activatedRoute });

        if (this.drawerComponent) {
            this.sideDrawerService.init(this.drawerComponent.sideDrawer);
        }
    }
}
