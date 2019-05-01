//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// You can write your custom code in the app-layout.component.ts file instead.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';

import { TranslationsProvider } from '@src/app/core/translations.provider';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { UtilsService } from '@src/app/core/services/utils.service';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ErrorHandlingService } from '@src/app/core/error-handling.service';

@Component({
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css']
})
export class AppLayoutViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $config = {
        components: {
            image0: {
                navigateUrl: '/',
                alt: ''
            },
            label0: {
                forAttribute: '',
                textKey: 'modules.System.views.app-layout.components.label0.text'
            },
            userdropdown0: {},
            navigationpanelbar0: {}
        }
    };

    public $navigationData = [
        {
            title: 'Approval',
            routerLink: '/claims/approval',
            children: []
        },
        {
            title: 'Dashboard',
            routerLink: '/claims/dashboard',
            children: []
        }
    ];

    public $dataModels: any = {};

    protected $activatedRoute: ActivatedRoute;
    protected $utilsService: UtilsService;
    protected $serviceFactory: DataServiceFactory;
    protected $errorHandlingService: ErrorHandlingService;

    constructor(public injector: Injector) {
        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();

        this.$activatedRoute = injector.get(ActivatedRoute);
        this.$utilsService = injector.get(UtilsService);
        this.$serviceFactory = injector.get(DataServiceFactory);
        this.$errorHandlingService = injector.get(ErrorHandlingService);

        const dataConfig = {};

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {}

    public getLanguages(): any[] {
        return [
            {
                label: 'English',
                culture: 'en-US',
                order: 0,
                key: 'translations.default'
            }
        ];
    }
}
