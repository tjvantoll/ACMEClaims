///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { State } from '@progress/kendo-data-query';

import { DataProviderService } from '@src/app/core/data/data-provider.service';
import { DataService } from '@src/app/core/data/data.service';
import { KinveyDataService } from '@src/app/core/data/kinvey-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { DataServiceFactory } from '@src/app/core/data/data-service-factory';

@Injectable()
export class KinveyDataServiceFactory extends DataServiceFactory {
    constructor(protected http: HttpClient, protected dataProviderService: DataProviderService) {
        super();
    }

    public getService<T>(config: KinveyServiceConfig, state?: State): DataService<T> {
        return new KinveyDataService<T>(config, this.http, this.dataProviderService, state);
    }
}
