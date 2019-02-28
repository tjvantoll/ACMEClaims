///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject, Subscription, combineLatest, merge, of, from } from 'rxjs';
import { filter, flatMap, last, map, pairwise, scan, shareReplay, tap, withLatestFrom, catchError } from 'rxjs/operators';

import { Kinvey, InvalidCredentialsError, NoActiveUserError } from 'kinvey-nativescript-sdk';

import { KinveyService } from '@src/app/core/data/kinvey.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { KinveyFileData} from '@src/app/core/data/kinvey-file-data';
import { DataServiceContext } from '@src/app/core/data/data-service-context';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';
import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { NetworkMonitoringService } from '@src/app/core/services/network-monitoring.service';

class InternalState {
    public collectionState: CollectionState;
    public loadMorePage: number;

    constructor(collectionState: CollectionState, loadMorePage: number = 0) {
        this.collectionState = collectionState;
        this.loadMorePage = loadMorePage;
    }
}

@Injectable()
export class KinveyCoreDataService {
    // TODO consider add an option for wheter to trigger dataReload or not
    private dataReload: { [key: string]: Subject<any> } = {};
    private syncCollection: { [key: string]: Subscription } = {};

    constructor(protected kinvey: KinveyService, private networkMonitoringService: NetworkMonitoringService) { }

    public getAll<T>(context: DataServiceContext<CollectionState>): Observable<ModelDataResult<T> | T[]> {
        console.log('getAll');

        if (context.config.loadOnDemand) {
            return this.getStateObservableWithLoadMore(context).pipe(
                tap(() => console.log('After getStateObservableWithLoadMore')),
                flatMap(state => this.getQueryObservableWithLoadMore<T>(context, state).pipe(
                    this.handleObservableError(context),
                    last(value => !!value),
                    map(items => ({ items, state }))
                )),
                scan((oldItems: Kinvey.Entity[], value: { items: Kinvey.Entity[], state: InternalState }) => {
                    if (value.state.loadMorePage) {
                        const uniqueIds = new Set(oldItems.map(item => item._id));
                        return oldItems.concat(value.items.filter(item => !uniqueIds.has(item._id)));
                    }

                    return value.items;
                }, []),
                map(items => items as any[] as T[]),
                tap(() => console.log('After getQueryObservableWithLoadMore')),
                shareReplay(1)
            );
        }

        return this.getStateObservable(context).pipe(
            flatMap(state => this.getQueryObservable<T>(context, state)),
            shareReplay(1)
        );
    }

    public get<T>(context: DataServiceContext<DocumentState>): Observable<T> {
        const documentObservable = state => from( // To be removed when kinvey sdk depends on rxjs v6
            this.getDataStoreCollection(context.config).findById(state.id, context.config.requestOptions)
        ).pipe(
            this.handleObservableError(context),
            last(value => !!value),
            map(item => item as any as T)
        );

        return merge(
            this.getDataReload(context.config).pipe(
                withLatestFrom(context.stateChanges),
            ),
            context.stateChanges
        ).pipe(
            flatMap(state => documentObservable(state)),
            shareReplay(1)
        );
    }

    public save<T>(context: DataServiceContext<CollectionState | DocumentState>, item: T) {
        const savePromise = this.getDataStoreCollection(context.config)
            .save(item, context.config.requestOptions)
            .then(() => this.refresh(context))
            .catch(error => this.handlePromiseError(context, error));

        return this.networkMonitoringService.isOnline
            ? savePromise
            : Promise.resolve().then(() => {
                setTimeout(() => this.refresh(context), 200);
            });
    }

    public remove<T>(context: DataServiceContext<CollectionState | DocumentState>, item: T) {
        return this.getDataStoreCollection(context.config)
            .removeById((item as any)._id, context.config.requestOptions)
            .then(() => this.refresh(context))
            .catch(error => this.handlePromiseError(context, error));
    }

    public removeAll(context: DataServiceContext<CollectionState | DocumentState>, query?: any) {
        return this.getDataStoreCollection(context.config)
            .remove(query, context.config.requestOptions)
            .then(() => this.refresh(context))
            .catch(error => this.handlePromiseError(context, error));
    }

    public refresh(context: DataServiceContext<CollectionState | DocumentState>): void {
        this.getDataReload(context.config).next();
    }

    public loadMore(context: DataServiceContext<CollectionState>): void {
        if (context.loadMore) {
            context.loadMore.next();
        }
    }

    public filesUpload(kinveyFileData: KinveyFileData) {
        return this.kinvey.filesUpload(kinveyFileData.file, kinveyFileData.metadata, kinveyFileData.options);
    }

    private getDataStoreCollection(config: KinveyServiceConfig) {
        const dataStoreCollection = this.kinvey.getDataStoreCollection(config.collection, config.dataStoreType);
        this.sync(config, dataStoreCollection);
        return dataStoreCollection;
    }

    private sync(config: KinveyServiceConfig, dataStoreCollection: Kinvey.CacheStore<Kinvey.Entity>) {
        const collectionName = config.collection;

        if (this.syncCollection[collectionName] || !dataStoreCollection.pendingSyncCount) {
            return;
        }

        this.syncCollection[collectionName] = this.networkMonitoringService.connectionObservable
            .pipe(
                filter(isOnline => isOnline),
                flatMap(() => from(dataStoreCollection.pendingSyncCount())),
                filter((count: any) => count > 0),
                flatMap(() => from(dataStoreCollection.sync()))
            )
            .subscribe(() => {
                const dr = this.getDataReload(config);
                dr.next();
            });
    }

    private getDataReload(config: KinveyServiceConfig) {
        const collectionName = config.collection;
        this.dataReload[collectionName] = this.dataReload[collectionName] || new Subject<any>();
        return this.dataReload[collectionName];
    }

    getStateObservable(context: DataServiceContext<CollectionState>): Observable<InternalState> {
        return merge(
            this.getDataReload(context.config).pipe(
                withLatestFrom(context.stateChanges),
                map(([_, state]) => new InternalState(state))
            ),
            context.stateChanges.pipe(
                map(state => new InternalState(state))
            )
        );
    }

    getStateObservableWithLoadMore(context: DataServiceContext<CollectionState>): Observable<InternalState> {
        return merge(
            of(new InternalState({})),
            this.getDataReload(context.config).pipe(
                withLatestFrom(context.stateChanges),
                map(([_, state]) => new InternalState(state))
            ),
            context.loadMore.pipe(
                withLatestFrom(context.stateChanges),
                map(([_, state]) => new InternalState(state, 1))
            ),
            context.stateChanges.pipe(
                map(state => new InternalState(state))
            )
        ).pipe(
            tap(() => console.log('merged: getStateObservableWithLoadMore')),
            pairwise(),
            map(([oldState, newState]) => {
                if (newState.loadMorePage) {
                    newState.loadMorePage += oldState.loadMorePage || 0;
                }

                return newState;
            }),
            tap(() => console.log('last: getStateObservableWithLoadMore')),
        );
    }

    private getQueryObservable<T>(context: DataServiceContext<CollectionState>, state: InternalState): Observable<ModelDataResult<T>> {
        context.isLoading.next(true);
        const dataStoreCollection = this.getDataStoreCollection(context.config);
        const query = this.kinvey.dataStateToKinveyQuery(state.collectionState);

        return combineLatest(
            dataStoreCollection.find(query, context.config.requestOptions),
            dataStoreCollection.count(query, context.config.requestOptions)
        ).pipe(
            map(([items, countResult]) => ({
                data: items as any[] as T[],
                total: countResult
            })),
            tap(() => context.isLoading.next(false))
        );
    }

    private getQueryObservableWithLoadMore<T>(context: DataServiceContext<CollectionState>, state: InternalState):
        Observable<Array<Kinvey.Entity>> {
        context.isLoading.next(true);
        console.log('context.isLoading.next(true);');
        const dataStoreCollection = this.getDataStoreCollection(context.config);
        const query = this.kinvey.dataStateToKinveyQuery(state.collectionState);

        if (state.loadMorePage) {
            query.skip += state.loadMorePage * query.limit;
        }

        // TODO: Remove from() when kinvey sdk depends on rxjs v6
        return from(dataStoreCollection.find(query, context.config.requestOptions)).pipe(
            tap(items => {
                context.isLoading.next(false);
                console.log('context.isLoading.next(false);');
            })
        );
    }

    private handleError(context: DataServiceContext<CollectionState | DocumentState>, error: Error) {
        if (error instanceof InvalidCredentialsError || error instanceof NoActiveUserError) {
            //   this.navigationService.navigate(['login'], { clearHistory: true });
            // TODO: use Authentication Service instead
            return;
        }

        context.errors.next(error);
        console.error(error.toString());
    }

    private handleObservableError(context: DataServiceContext<CollectionState | DocumentState>) {
        return catchError((error: Error) => {
            this.handleError(context, error);
            return of(null);
        });
    }

    private handlePromiseError(context: DataServiceContext<CollectionState | DocumentState>, error: Error) {
        this.handleError(context, error);
        throw error;
    }
}
