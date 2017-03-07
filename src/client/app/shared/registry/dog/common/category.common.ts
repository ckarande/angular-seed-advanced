import { Registry } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {
        interface ICategoryRegistry {
          CATEGORY: string;
        }
      }
    }
  }
}

Registry.categories.registry.dog.CATEGORY = 'Dog';
