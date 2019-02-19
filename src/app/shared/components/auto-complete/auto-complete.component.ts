///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';

@Component({
    selector: 'ks-auto-complete',
    templateUrl: './auto-complete.component.html',
    styles: [
        `
            .ks-auto-complete kendo-autocomplete {
                width: 100%;
            }
        `
    ]
})
export class KsAutoCompleteComponent extends KsInputBaseComponent implements OnChanges {
    @ViewChild('kendoComponent')
    public kendoComponent: AutoCompleteComponent;
    @Input()
    public name: string;
    @Input()
    public data: Array<any>;
    @Output()
    public filterChange: EventEmitter<string> = new EventEmitter();
    public filteredData: Array<any>;

    public ngOnChanges(): void {
        this.filteredData = this.data;
    }

    set model(value: any) {
        super.setModel<any>(value);
    }

    @Input()
    get model(): any {
        return super.getModel<any>();
    }

    public changeHandler(event: any): void {
        const { value } = this.formGroup.controls[this.id];
        super.updateModel<any>(value);
    }

    public filterHandler(filterValue: string): void {
        if (!this.data) {
            return;
        }

        this.filteredData = this.data.filter(item => this.filterItem(item, filterValue));
        this.filterChange.emit(filterValue);
    }

    private filterItem(item: any, filterValue: string): boolean {
        if (!filterValue || !this.config.dataTextField) {
            return true;
        }

        const itemText = item[this.config.dataTextField].toLowerCase();
        const filterText = filterValue.toLowerCase();

        switch (this.config.filter) {
            case 'StartsWith':
                return itemText.indexOf(filterText) === 0;
            case 'EndsWith':
                return itemText.indexOf(filterText, itemText.length - filterText.length) !== -1;
            case 'Contains':
                return itemText.indexOf(filterText) !== -1;
            default:
                return true;
        }
    }
}
