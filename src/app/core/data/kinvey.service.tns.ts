///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { Kinvey } from 'kinvey-nativescript-sdk';

import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import {
    CompositeFilterDescriptor,
    FilterDescriptor,
    isCompositeFilterDescriptor
} from '@src/app/core/data/state/filter-descriptor.interface';

@Injectable()
export class KinveyService {
    constructor() {
        Kinvey.init({} as Kinvey.ClientConfig);
    }

    public getDataStoreCollection(collectionName: string, dataStoreType: Kinvey.DataStoreType) {
        return Kinvey.DataStore.collection(collectionName, dataStoreType);
    }

    public dataStateToKinveyQuery(dataState: CollectionState): Kinvey.Query {
        const query = new Kinvey.Query();

        if (typeof dataState.filter !== 'undefined') {
            query.filter = this.buildCompositeFilter(dataState.filter);
        }

        query.skip = dataState.skip || 0;
        query.limit = dataState.take || 20;

        if (typeof dataState.sort !== 'undefined') {
            const sortDef = {};

            dataState.sort.forEach(item => {
                if (item.dir && item.dir === 'desc') {
                    query.descending(item.field);
                } else {
                    query.ascending(item.field);
                }
            });
        }

        return query;
    }

    public filesUpload(file: {}, metadata?: Kinvey.FileMetadata, options?: Kinvey.RequestOptions) {
        return Kinvey.Files.upload(file, metadata, options);
    }

    protected buildCompositeFilter(filter: CompositeFilterDescriptor): object {
        if (filter.filters.length === 0) {
            return {};
        }

        return {
            ['$' + filter.logic]: filter.filters.map(item => {
                if (isCompositeFilterDescriptor(item)) {
                    return this.buildCompositeFilter(item as CompositeFilterDescriptor);
                }

                return this.buildFilter(item as FilterDescriptor);
            })
        };
    }

    protected buildFilter(filter: FilterDescriptor): object {
        if (!filter.field && typeof filter.field !== 'string') {
            return {};
        }

        const field = filter.field as string;
        let value: any;

        switch (filter.operator) {
            case 'eq':
                value = filter.value;
                break;

            case 'neq':
                value = {
                    $ne: filter.value
                };
                break;

            case 'isnull':
                value = null;
                break;

            case 'isnotnull':
                value = {
                    $ne: null
                };
                break;

            case 'lt':
            case 'lte':
            case 'gt':
            case 'gte':
                value = {
                    ['$' + filter.operator]: filter.value
                };
                break;

            case 'startswith':
                value = {
                    $regex: '^' + this.filterValueAsRegExp(filter)
                };
                break;

            case 'endswith':
                value = {
                    $regex: '^.*' + this.filterValueAsRegExp(filter) + '$'
                };
                break;

            case 'contains':
                value = {
                    $regex: '^.*' + this.filterValueAsRegExp(filter) + '.*'
                };
                break;

            case 'doesnotcontain':
                value = {
                    $regex: '^((?!' + this.filterValueAsRegExp(filter) + ').)*$'
                };
                break;

            case 'isempty':
                value = '';
                break;

            case 'isnotempty':
                value = {
                    $ne: ''
                };
                break;

            default:
                break;
        }

        return {
            [field]: value
        };
    }

    protected filterValueAsRegExp(filter: FilterDescriptor): string {
        const value: string = (filter.value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        if (filter.ignoreCase) {
            return value
                .split('')
                .map(char => {
                    const upper = char.toUpperCase();
                    const lower = char.toLowerCase();
                    return upper !== lower ? `[${upper}${lower}]` : char;
                })
                .join('');
        }

        return value;
    }
}
