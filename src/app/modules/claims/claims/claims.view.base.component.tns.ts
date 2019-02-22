///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, OnInit } from '@angular/core';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { Claim } from '@src/app/data/claim.model';
import { getClaimConfig } from '@src/app/data/claim.config';

@Component({
    templateUrl: './claims.view.component.html',
    styleUrls: ['./claims.view.component.css']
})
export class ClaimsViewBaseComponent implements OnInit {
    public $config: any = {
        listView: {
            navigateOnItemTap: {
                parameter: ''
            }
        }
    };

    public $claimsService: MobileDataService<Claim, CollectionState>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            claims: getClaimConfig()
        };

        this.initDataServices(dataConfig);
    }

    ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$claimsService = this.$serviceFactory.collectionData<Claim>(dataConfig.claims, {
            skip: 0,
            take: 20
        });
    }
}
