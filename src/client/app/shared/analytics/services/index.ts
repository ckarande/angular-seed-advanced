import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace analytics {
      export interface IProviderRegistry {
        ANALYTICS_PROVIDERS: any[];
      }
    }
  }
};

Registry.providers.analytics.ANALYTICS_PROVIDERS = [];

import './analytics.service';

export * from './analytics.service';
