//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, ViewChild } from '@angular/core';
import { KsNumericInputBaseComponent } from '@src/app/shared/components/numeric-input.base.component';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'ks-percent-text-box',
    templateUrl: './percent-text-box.component.html',
})
export class KsPercentTextBoxComponent extends KsNumericInputBaseComponent {
    @ViewChild('percentInput') public percentInput: NumericTextBoxComponent;
}
