///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '@src/app/core/app-config.service';

export const environmentBase = {
    appId: '93091c72-6dd9-4814-bfff-50a4b0315a56',
    appName: 'ACMEClaims',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    }
};
