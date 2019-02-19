///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { State } from '@progress/kendo-data-query';

import { DataService } from '@src/app/core/data/data.service';
import { LocalDataService } from '@src/app/core/data/local-data.service';
import { LocalDataServiceConfig } from '@src/app/core/data/local-data-service-config';
import { DataServiceFactory } from '@src/app/core/data/data-service-factory';
import { InMemoryDataStoreService } from '@src/app/core/data/in-memory-data-store.service';

@Injectable()
export class LocalDataServiceFactory extends DataServiceFactory {
    constructor(protected dataStore: InMemoryDataStoreService) {
        super();
    }

    public getService<T>(config: LocalDataServiceConfig, state?: State): DataService<T> {
        return new LocalDataService<T>(config, this.dataStore, state);
    }
}
