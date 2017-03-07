// libs
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export interface IProviderRegistry {
        REGISTRY_PROVIDERS: any[];
      }
    }
  }
}

Registry.providers.registry.REGISTRY_PROVIDERS = [];
