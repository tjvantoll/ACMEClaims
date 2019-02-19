///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { DataServiceActionType } from '@src/app/core/data/data-service.interface';

export enum DataServiceEventState {
    'inProgress' = 'inProgress',
    'done' = 'done',
    'failed' = 'failed'
}

export class DataServiceEvent {
    action: DataServiceActionType;
    state: DataServiceEventState | string;
}
