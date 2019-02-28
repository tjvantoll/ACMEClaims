///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from "@angular/core";

import { isAndroid } from 'tns-core-modules/platform';

import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';

@Component({
    selector: 'ks-search-bar',
    templateUrl: './search-bar.component.html'
})
export class KSSearchBarComponent {
    @Input()
    public dataService: MobileDataService<any, CollectionState>;

    @Input()
    public searchBy: string[];

    @Input()
    public ignoreCase: boolean;

    public onTextChanged({ object: searchBar }) {
        if (!this.searchBy.length) {
            return;
        }

        const dataState = this.dataService.dataState.getCurrent();

        if (!searchBar.text) {
            delete dataState.filter;
        } else {
            const filters = this.searchBy.map(item => {
                return {
                    field: item,
                    operator: 'contains',
                    value: searchBar.text,
                    ignoreCase: this.ignoreCase
                };
            });

            dataState.filter = {
                logic: 'or',
                filters
            };
        }

        this.dataService.dataState.update(dataState);
    }

    public hideKeyboard({ object: searchBar }) {
        if (searchBar) {
            searchBar.dismissSoftInput();

            if (isAndroid) {
                searchBar.android.clearFocus();
            }
        }
    }
}
