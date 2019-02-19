///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Injectable()
export class SideDrawerService {
    private sideDrawer: RadSideDrawer;

    public get hasSideDrawer(): boolean {
        return !!this.sideDrawer;
    }

    public init(sideDrawer: RadSideDrawer): void {
        this.sideDrawer = sideDrawer;
    }

    public show(): void {
        if (this.hasSideDrawer) {
            this.sideDrawer.showDrawer();
        }
    }

    public close(): void {
        if (this.hasSideDrawer) {
            this.sideDrawer.closeDrawer();
        }
    }
}
