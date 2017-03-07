// libs
import { Registry, Model } from 'ngrx-registry';
const Services = Registry.services.core;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IProviderRegistry {
        CORE_PROVIDERS: any[];
      }
    }
  }
}

Registry.providers.core.CORE_PROVIDERS = [];

import './app.service';
import './console.service';
import './log.service';
import './router-extensions.service';
import './window.service';

export * from './app.service';
export * from './console.service';
export * from './log.service';
export * from './router-extensions.service';
export * from './window.service';
