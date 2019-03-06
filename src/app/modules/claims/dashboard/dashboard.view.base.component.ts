///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { State } from '@progress/kendo-data-query';

import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { DataService } from '@src/app/core/data/data.service';
import { DataServiceFactory } from '@src/app/core/data/data-service-factory';
import { KinveyDataServiceFactory } from '@src/app/core/data/kinvey-data-service-factory';
import { Claim } from '@src/app/data/claim.model';
import { ClaimType } from '@src/app/data/claim-type.model';
import { ClaimStatus } from '@src/app/data/claim-status.model';
import { getClaimConfig } from '@src/app/data/claim.config';
import { getClaimTypeConfig } from '@src/app/data/claim-type.config';
import { getClaimStatusConfig } from '@src/app/data/claim-status.config';

import { NotificationService } from '@src/app/core/notification/notification.service';
import { Notification } from '@src/app/core/notification/notification';

@Component({
    templateUrl: './dashboard.view.component.html',
    styleUrls: ['./dashboard.view.component.css']
})
export class DashboardViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $kinveyDataServiceFactory: KinveyDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesState: { [key: string]: State } = {
        Claims: {
            skip: 0,
            take: 20
        },
        ClaimType: {
            skip: 0,
            take: 20
        },
        ClaimStatus: {
            skip: 0,
            take: 20
        }
    };

    public $dataModels: any = {
        ClaimsModel: {},
        ClaimTypeModel: {},
        ClaimStatusModel: {}
    };

    public $config: any = {
        components: {
            label0: {
                forAttribute: '',
                textKey: 'modules.Claims.views.Dashboard.components.label0.text'
            },
            piecharts0: {
                title: {
                    textKey: 'modules.Claims.views.Dashboard.components.piecharts0.titleText'
                },
                legend: {
                    visible: true,
                    background: 'white',
                    position: 'top'
                },
                seriesDefaults: {
                    type: 'pie',
                    labels: {
                        visible: true,
                        background: 'white'
                    }
                },
                series: [
                    {
                        field: 'count',
                        categoryField: 'type',
                        startAngle: 90,
                        labels: {}
                    }
                ],
                tooltip: {
                    format: '',
                    visible: false
                }
            },

            barcharts0: {
                title: {
                    textKey: 'modules.Claims.views.Dashboard.components.barcharts0.titleText'
                },
                legend: {
                    visible: true,
                    background: 'white',
                    position: 'top'
                },
                valueAxis: {
                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }
                    }
                },
                categoryAxis: {
                    field: 'type',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }
                    }
                },
                seriesDefaults: {
                    type: 'bar',
                    labels: {
                        visible: false
                    }
                },
                series: [
                    {
                        field: 'count',
                        name: 'Claim Status',
                        labels: {}
                    }
                ],
                tooltip: {
                    format: '',
                    visible: false
                }
            }
        }
    };

    constructor(public injector: Injector) {
        this.$kinveyDataServiceFactory = this.injector.get(KinveyDataServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);

        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            Claims: this.$kinveyDataServiceFactory.getService<Claim>(dsConfig['Claims'], this.$dataServicesState['Claims']),
            ClaimType: this.$kinveyDataServiceFactory.getService<ClaimType>(dsConfig['ClaimType'], this.$dataServicesState['ClaimType']),
            ClaimStatus: this.$kinveyDataServiceFactory.getService<ClaimStatus>(
                dsConfig['ClaimStatus'],
                this.$dataServicesState['ClaimStatus']
            )
        };

        this.$dataServicesData = {
            Claims: this.getDataChanges('Claims'),
            ClaimType: this.getDataChanges('ClaimType'),
            ClaimStatus: this.getDataChanges('ClaimStatus')
        };

        this.$dataServicesResult = {
            Claims: this.getDataResult('Claims'),
            ClaimType: this.getDataResult('ClaimType'),
            ClaimStatus: this.getDataResult('ClaimStatus')
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
            Claims: getClaimConfig(),
            ClaimType: getClaimTypeConfig(),
            ClaimStatus: getClaimStatusConfig()
        };

        return config;
    }
}
