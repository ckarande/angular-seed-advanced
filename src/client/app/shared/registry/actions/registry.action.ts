import { Action } from '@ngrx/store';
import { type } from '../../core/utils/type';
import { CATEGORY } from '../common/category.common';

import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      
      /**
       * For each action type in an action group, make a simple
       * enum object for all of this group's action types.
       *
       * The 'type' utility function coerces strings into string
       * literal types and runs a simple check to guarantee all
       * action types in the application are unique.
       */
      interface IActions {
        INITIALIZE_REGISTRY: string;
        _INITIALIZE_REGISTRY: string;
        REGISTRY_INITIALIZED: string;
        INITIALIZE_REGISTRY_FAILED: string;
      }
    }
  }
}

const ActionTypes: Model.registry.IActions = {
  INITIALIZE_REGISTRY:          type(`${CATEGORY} Initialize Registry`),
  _INITIALIZE_REGISTRY:         type(`${CATEGORY} Initialize Registry (internal)`),
  REGISTRY_INITIALIZED:         type(`${CATEGORY} Initialized Registry`),
  INITIALIZE_REGISTRY_FAILED:   type(`${CATEGORY} Initialize Registry Failed`),
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeRegistryAction implements Action {
  type = ActionTypes.INITIALIZE_REGISTRY;
  payload = null;
}

export class InitializeRegistryActionInternal implements Action {
  type = ActionTypes._INITIALIZE_REGISTRY;
  payload = null;
}

export class RegistryInitializedAction implements Action {
  type = ActionTypes.REGISTRY_INITIALIZED;
  payload = null;
}

export class InitializeRegistryActionFailed implements Action {
  type = ActionTypes.INITIALIZE_REGISTRY_FAILED;
  payload = null;
}


declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      interface IActionRegistry {      
          TYPES: typeof ActionTypes;
          InitializeRegistryAction: typeof InitializeRegistryAction;
          InitializeRegistryActionInternal: typeof InitializeRegistryActionInternal;
          RegistryInitializedAction: typeof RegistryInitializedAction;
          InitializeRegistryActionFailed: typeof InitializeRegistryActionFailed;
      }

    /**
     * Export a type alias of all actions in this action group
     * so that reducers can easily compose action types
     */
      export type Actions =
          InitializeRegistryAction
        | InitializeRegistryActionInternal
        | RegistryInitializedAction
        | InitializeRegistryActionFailed;
    }
  } 
}

Object.assign(Registry.actions.registry, {
    TYPES: ActionTypes,
    InitializeRegistryAction: InitializeRegistryAction,
    InitializeRegistryActionInternal: InitializeRegistryActionInternal,
    RegistryInitializedAction: RegistryInitializedAction,
    InitializeRegistryActionFailed: InitializeRegistryActionFailed
  });
