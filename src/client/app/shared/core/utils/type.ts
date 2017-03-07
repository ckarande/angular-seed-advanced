import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IClassRegistry {
        type: typeof type;
      }
    }
  }
}

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 * 
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

Registry.classes.core.type = type;
