///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, Inject } from '@angular/core';
import { BaseStorageService } from '@src/app/core/base-storage.service';

@Injectable()
export class LocalStorageService extends BaseStorageService {
    constructor(@Inject('Window') window: Window) {
        super();
        this.storage = window.localStorage;
    }
}
