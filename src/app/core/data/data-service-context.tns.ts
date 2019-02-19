///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';

export interface DataServiceContext<TState extends CollectionState | DocumentState> {
    config: KinveyServiceConfig;
    stateChanges?: Observable<TState>;
    errors: BehaviorSubject<Error>;
    isLoading: Subject<boolean>;
    loadMore?: Subject<any>;
}
