///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { DataService } from '@src/app/core/data/data.service';
import { DataServiceConfig } from '@src/app/core/data/data-service-config';

export abstract class DataServiceFactory {
    public abstract getService<T>(config: DataServiceConfig): DataService<T>;
}
