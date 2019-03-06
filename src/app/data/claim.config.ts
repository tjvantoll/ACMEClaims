///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Claim } from '@src/app/data/claim.model';

export function getClaimConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Claim(),
        mapData: dataItem => {
            if (dataItem.date) {
                dataItem.date = new Date(dataItem.date);
            }

            return dataItem;
        },
        collection: 'Claims'
    };
}
