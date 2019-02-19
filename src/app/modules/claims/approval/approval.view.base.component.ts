///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { State } from '@progress/kendo-data-query';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { KsGridComponent } from '@src/app/shared/components/grid/grid.component';
import { ModelDataResult } from '@src/app/core/data/model-data-result';

import { DataService } from '@src/app/core/data/data.service';
import { DataServiceFactory } from '@src/app/core/data/data-service-factory';
import { KinveyDataServiceFactory } from '@src/app/core/data/kinvey-data-service-factory';
import { Claim } from '@src/app/data/claim.model';
import { getClaimConfig } from '@src/app/data/claim.config';

import { NotificationService } from '@src/app/core/notification/notification.service';
import { Notification } from '@src/app/core/notification/notification';

@Component({
    templateUrl: './approval.view.component.html',
    styleUrls: ['./approval.view.component.css']
})
export class ApprovalViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid')
    public $grid: KsGridComponent;

    public $kinveyDataServiceFactory: KinveyDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesState: { [key: string]: State } = {
        Claims: {
            skip: 0,
            take: 20
        }
    };

    public $dataModels: any = {
        ClaimsModel: {}
    };

    public $config: any = {
        title: 'Manage Claims',
        titleKey: 'modules.Claims.views.Approval.title',
        components: {
            grid: {
                filterable: false,
                groupable: false,
                pageable: this.$dataServicesState['Claims'].take !== undefined,
                reorderable: false,
                resizable: false,
                sortable: false,
                commandColumnWidth: 220,
                editing: {
                    mode: 'Inline'
                },
                confirmDelete: true,
                events: {
                    onRowSelect: e => {
                        this['onRowSelect'](e);
                    }
                }
            },

            ctl1: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl1.placeholder',
                name: 'name',
                value: '',
                title: 'Name',
                debounce: 0
            },
            ctl2: {
                format: 'M/dd/yyyy',
                title: 'Date',
                min: new Date('1899-12-31T22:00:00.000Z'),
                max: new Date('2099-12-30T22:00:00.000Z')
            },
            ctl3: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl3.placeholder',
                name: 'vehicle',
                value: '',
                title: 'Vehicle',
                debounce: 0
            },
            ctl4: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl4.placeholder',
                name: 'image',
                value: '',
                title: 'Image',
                debounce: 0
            },
            ctl5: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl5.placeholder',
                name: 'description',
                value: '',
                title: 'Description',
                debounce: 0
            },
            ctl6: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl6.placeholder',
                name: 'policynumber',
                value: '',
                title: 'Policynumber',
                debounce: 0
            },
            ctl7: {
                placeholderKey: 'modules.Claims.views.Approval.components.ctl7.placeholder',
                name: 'type',
                value: '',
                title: 'Type',
                debounce: 0
            }
        }
    };

    constructor(public injector: Injector) {
        this.$kinveyDataServiceFactory = this.injector.get(KinveyDataServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);

        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            Claims: this.$kinveyDataServiceFactory.getService<Claim>(dsConfig['Claims'], this.$dataServicesState['Claims'])
        };

        this.$dataServicesData = {
            Claims: this.getDataChanges('Claims')
        };

        this.$dataServicesResult = {
            Claims: this.getDataResult('Claims')
        };
    }

    public ngOnInit(): void {
        this['onInit']();

        for (const dataSourceName of Object.keys(this.$dataServices)) {
            this.read(dataSourceName);
            this.dataServiceErrors(dataSourceName);
        }
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    public read(dataSourceName): void {
        this.$dataServices[dataSourceName].read();
    }

    public getDataChanges(dataSourceName): Observable<any[]> {
        const dataService = this.$dataServices[dataSourceName];
        return dataService.dataChanges.pipe(map(response => (response ? response.data : [])));
    }

    public getDataResult(dataSourceName): BehaviorSubject<ModelDataResult<any>> {
        return this.$dataServices[dataSourceName].dataChanges;
    }

    public dataServiceErrors(dataSourceName): void {
        this.$dataServices[dataSourceName].errors.subscribe((err: any) => {
            if (err) {
                const message = (err.error && err.error.message) || err.message;
                this.$notificationService.notify(new Notification(`<ul><li>${message}<li></ul>`, 'error', 10000));
            }
        });
    }

    protected getDataServicesConfig() {
        const config = {
            Claims: getClaimConfig()
        };

        return config;
    }
}
