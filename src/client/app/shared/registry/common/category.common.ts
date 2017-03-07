export const CATEGORY: string = 'Registry';

import { Registry } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace common {
        interface ICategoryRegistry {
          CATEGORY: string;
        }
      }
    }
  }
}

Registry.categories.registry.common.CATEGORY = 'Registry Common';
