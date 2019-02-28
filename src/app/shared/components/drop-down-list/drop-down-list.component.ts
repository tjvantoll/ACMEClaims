///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'ks-drop-down-list',
    templateUrl: './drop-down-list.component.html',
    styles: [
        `
        .ks-drop-down-list kendo-dropdownlist {
            width: 100%;
        }
        `
    ]
})
export class KsDropDownListComponent extends KsInputBaseComponent implements OnInit {
    @ViewChild('kendoComponent') public kendoComponent: DropDownListComponent;
    @Input() public data: Array<any>;
    @Output() public selectionChange: any = new EventEmitter();
    public defaultItem: any;

    public ngOnInit(): void {
        super.ngOnInit();
        this.initDefaultItem();
    }

    @Input() get model(): any {
        return super.getModel<any>();
    }

    set model(value: any) {
        super.setModel<any>(value);
    }

    public changeHandler(event: any): void {
        const fg: FormGroup = <FormGroup>this.viewFormArray.controls.find(c => (<FormGroup>c).controls[this.id] !== undefined);
        const { value } = fg.controls[this.id];
        super.updateModel<any>(value);
    }

    public selectionHandler(event: any): void {
        this.selectionChange.emit(event);
    }

    private initDefaultItem(): void {
        if(this.config.optionLabel) {
            this.defaultItem = {};
            this.defaultItem[this.config.valueField] = null;
            this.defaultItem[this.config.textField] = this.config.optionLabel;
        }
    }
}