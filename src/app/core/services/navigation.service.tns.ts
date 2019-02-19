///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';

// TODO: remove this once we update nativescript-angular
const findOutletByRoute = (<any>RouterExtensions.prototype).findOutletByRoute;
(<any>RouterExtensions.prototype).findOutletByRoute = function(currentRoute) {
    const outlet = findOutletByRoute.call(this, currentRoute);
    const pathByOutlets = this.locationStrategy.getPathByOutlets(currentRoute);
    return outlet || this.locationStrategy.findOutletByOutletPath(pathByOutlets);
};

@Injectable()
export class NavigationService {
    constructor(private zone: NgZone, private routerExtensions: RouterExtensions) {}

    navigate(command: any[], extras: ExtendedNavigationExtras = {}) {
        extras.animated = true;
        extras.transition = extras.transition || {
            name: 'slide',
            duration: 300,
            curve: 'ease'
        };

        this.zone.run(() => this.routerExtensions.navigate(command, extras));
    }

    goToRoot(extras: ExtendedNavigationExtras = {}) {
        extras.clearHistory = true;
        this.navigate([''], extras);
    }

    canGoBack(activatedRoute: ActivatedRoute) {
        return this.routerExtensions.canGoBack({ relativeTo: activatedRoute });
    }

    goBack(activatedRoute: ActivatedRoute) {
        return this.routerExtensions.back({ relativeTo: activatedRoute });
    }
}
