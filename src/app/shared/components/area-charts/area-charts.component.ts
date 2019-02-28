///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnChanges } from '@angular/core';
import { KsChartsBaseComponent } from '@src/app/shared/components/charts.base.component';

@Component({
    selector: 'ks-area-charts',
    templateUrl: './area-charts.component.html',
})
export class KsAreaChartsComponent extends KsChartsBaseComponent implements OnChanges {
    public categories: Array<any>;

    public ngOnChanges(): void {
        const categoryField = this.config.categoryAxis.field;
        if (categoryField && this.data) {
            this.categories = this.data.map(item => item[categoryField]);
        }
    }
}
