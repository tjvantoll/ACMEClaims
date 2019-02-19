///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, ConnectableObservable, BehaviorSubject, Subject } from 'rxjs';
import { first, publish } from 'rxjs/operators';

import { KinveyCoreDataService } from '@src/app/core/data/kinvey-core-data.service';
import { KinveyFileData } from '@src/app/core/data/kinvey-file-data';
import { DataServiceContext } from '@src/app/core/data/data-service-context';
import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { DataStateService } from '@src/app/core/data/state/data-state.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';

export class MobileDataService<T, TState extends CollectionState | DocumentState> {
    public readonly errors: BehaviorSubject<Error>;
    public readonly isLoading: Subject<boolean>;

    constructor(
        private coreService: KinveyCoreDataService,
        private context: DataServiceContext<TState>,
        public readonly dataState: DataStateService<TState>,
        public readonly dataChanges: Observable<ModelDataResult<T> | T[] | T>
    ) {
        this.errors = context.errors;
        this.isLoading = context.isLoading;
    }

    public refresh(): Promise<any> {
        return this.toPromise(() => this.coreService.refresh(this.context));
    }

    public loadMore(): Promise<any> {
        return this.toPromise(() => this.coreService.loadMore(this.context as DataServiceContext<CollectionState>));
    }

    public save(item: T) {
        return this.coreService.save(this.context, item);
    }

    public remove(item: T) {
        return this.coreService.remove(this.context, item);
    }

    public filesUpload(kinveyFileData: KinveyFileData) {
        return this.coreService.filesUpload(kinveyFileData);
    }

    private toPromise(action: () => void) {
        const connectableObservable = this.dataChanges.pipe(publish()) as ConnectableObservable<any>;
        connectableObservable.connect();
        action();

        return connectableObservable.pipe(first()).toPromise();
    }
}
