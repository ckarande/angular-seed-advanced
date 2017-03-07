import { Registry } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IDirectiveRegistry {
        CORE_DIRECTIVES: any[];
      }
    }
  }
}

Registry.directives.core.CORE_DIRECTIVES = [];

import './platform.directive';

export * from './platform.directive';
