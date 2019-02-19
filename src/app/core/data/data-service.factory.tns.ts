///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

import { KinveyCoreDataService } from '@src/app/core/data/kinvey-core-data.service';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { DataServiceContext } from '@src/app/core/data/data-service-context';
import { DataStateService } from '@src/app/core/data/state/data-state.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';

@Injectable()
export class DataServiceFactory {
    constructor(protected coreDataService: KinveyCoreDataService) {}

    public collectionData<T>(config: KinveyServiceConfig, initialState?: CollectionState): MobileDataService<T, CollectionState> {
        if (initialState) {
            initialState.take = initialState.take || config.pageSize;
        }

        const stateService = new DataStateService<CollectionState>(initialState);

        const context: DataServiceContext<CollectionState> = {
            config,
            stateChanges: stateService.changes,
            errors: new BehaviorSubject<Error>(null),
            isLoading: new Subject<boolean>(),
            loadMore: config.loadOnDemand ? new Subject<any>() : undefined
        };

        const dataChanges = this.coreDataService.getAll<T>(context);

        return new MobileDataService<T, CollectionState>(this.coreDataService, context, stateService, dataChanges);
    }

    public documentData<T>(config: KinveyServiceConfig, id?: string): MobileDataService<T, DocumentState> {
        const stateService = new DataStateService<DocumentState>(id ? { id } : undefined);

        const context: DataServiceContext<DocumentState> = {
            config,
            stateChanges: stateService.changes,
            errors: new BehaviorSubject<Error>(null),
            isLoading: new Subject<boolean>()
        };

        const dataChanges = this.coreDataService.get<T>(context);

        return new MobileDataService<T, DocumentState>(this.coreDataService, context, stateService, dataChanges);
    }
}
