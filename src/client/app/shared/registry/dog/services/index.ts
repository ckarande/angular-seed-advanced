// libs
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {

        export interface IProviderRegistry {
          DOG_PROVIDERS: any[];
        }

      }
    }
  }
}

Registry.providers.registry.dog.DOG_PROVIDERS = [];

import './dog.service';
