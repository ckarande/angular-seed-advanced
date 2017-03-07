import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IProviderRegistry {
        SAMPLE_PROVIDERS: any[];
      }
    }
  }
}

Registry.providers.sample.SAMPLE_PROVIDERS = [];

import './name-list.service';
import './app-config';

export * from './name-list.service';
export * from './app-config';
