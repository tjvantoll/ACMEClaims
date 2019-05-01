//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ClaimsTest } from '@src/app/data/claims-test.model';

export function getClaimsTestConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new ClaimsTest(),
        mapData: dataItem => {
            if (dataItem.date) {
                dataItem.date = new Date(dataItem.date);
            }

            return dataItem;
        },
        collection: 'ClaimsTest',
        dataStoreType: Kinvey.DataStoreType.Network,
        loadOnDemand: true
    };
}
