///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, ReplaySubject, merge } from 'rxjs';
import { tap, switchMap, filter, debounceTime } from 'rxjs/operators';

import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';

export class DataStateService<TState extends CollectionState | DocumentState> {
    public readonly changes: Observable<TState>;

    private current: TState;
    private internalChanges = new ReplaySubject<TState>(1);
    private changesSubscriber = new ReplaySubject<Observable<TState>>(1);

    constructor(initialState: TState) {
        if (initialState) {
            this.internalChanges.next(initialState);
        }

        const changesSubscriber = this.changesSubscriber.pipe(
            switchMap(stateObservable => stateObservable)
        );

        this.changes = merge(this.internalChanges, changesSubscriber).pipe(
            filter(state => !!state),
            debounceTime(100),
            tap(state => {
                this.current = state;
            })
        );
    }

    public getCurrent(): TState {
        return JSON.parse(JSON.stringify(this.current));
    }

    public update(state: TState): void {
        this.internalChanges.next(state);
    }

    public onChanges(stateObservable: Observable<TState>): void {
        this.changesSubscriber.next(stateObservable);
    }
}
