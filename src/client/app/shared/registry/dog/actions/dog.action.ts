// libs
import { Action } from '@ngrx/store';
import { Registry, Model } from 'ngrx-registry';

// app
const type = Registry.classes.core.type;

// module
const CATEGORY = Registry.categories.registry.dog.CATEGORY;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {

        /**
         * For each action type in an action group, make a simple
         * enum object for all of this group's action types.
         *
         * The 'type' utility function coerces strings into string
         * literal types and runs a simple check to guarantee all
         * action types in the application are unique.
         */
        interface IActions {
          INITIALIZE_DOGS: string;
          _INITIALIZE_DOGS: string;
          DOGS_INITIALIZED: string;
          INITIALIZE_DOGS_FAILED: string;

          CREATE_DOG: string;
          _CREATE_DOG: string;
          DOG_CREATED: string;
          CREATE_DOG_FAILED: string;

          DESTROY_DOG: string;
          _DESTROY_DOG: string;
          DOG_DESTROYED: string;
          DESTROY_DOG_FAILED: string;

          UPDATE_DOG: string;
          _UPDATE_DOG: string;
          DOG_UPDATED: string;
          UPDATE_DOG_FAILED: string;
        }

      }
    }
  }
}

const ActionTypes: Model.registry.dog.IActions = {
  INITIALIZE_DOGS:          type(`${CATEGORY} Initialize Dogs`),
  _INITIALIZE_DOGS:         type(`${CATEGORY} Initialize Dogs (internal)`),
  DOGS_INITIALIZED:         type(`${CATEGORY} Initialized Dogs`),
  INITIALIZE_DOGS_FAILED:   type(`${CATEGORY} Initialize Dogs Failed`),

  CREATE_DOG:               type(`${CATEGORY} Add Dog`),
  _CREATE_DOG:              type(`${CATEGORY} Add Dog (internal)`),
  DOG_CREATED:              type(`${CATEGORY} Dog Added`),
  CREATE_DOG_FAILED:        type(`${CATEGORY} Add Dog Failed`),

  DESTROY_DOG:              type(`${CATEGORY} Destroy Dog`),
  _DESTROY_DOG:             type(`${CATEGORY} Destroy Dog (internal)`),
  DOG_DESTROYED:            type(`${CATEGORY} Dog Destroyed`),
  DESTROY_DOG_FAILED:       type(`${CATEGORY} Destroy Dog Failed`),

  UPDATE_DOG:               type(`${CATEGORY} Update Dog`),
  _UPDATE_DOG:              type(`${CATEGORY} Update Dog (internal)`),
  DOG_UPDATED:              type(`${CATEGORY} Dog Updated`),
  UPDATE_DOG_FAILED:        type(`${CATEGORY} Update Dog Failed`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeDogsAction implements Action {
  type = ActionTypes.INITIALIZE_DOGS;
  payload = null;
}

export class InitializeDogsActionInternal implements Action {
  type = ActionTypes._INITIALIZE_DOGS;

  constructor(public payload: Array<Model.registry.dog.IDogState>) { }
}

export class DogsInitializedAction implements Action {
  type = ActionTypes.DOGS_INITIALIZED;

  constructor(public payload: Array<Model.registry.dog.IDogState>) { }
}

export class InitializeDogsActionFailed implements Action {
  type = ActionTypes.INITIALIZE_DOGS_FAILED;

  constructor(public payload: any) { }
}

export class CreateDogAction implements Action {
  type: string = ActionTypes.CREATE_DOG;
  payload: Model.registry.dog.IDogState;

  constructor( message: Model.registry.common.SailsPublishCreateMessage<Model.registry.dog.IDogState>) { 
    this.payload = message.data;
  }
}

export class CreateDogActionInternal implements Action {
  type = ActionTypes._CREATE_DOG;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DogAddedAction implements Action {
  type = ActionTypes.DOG_CREATED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class CreateDogActionFailed implements Action {
  type = ActionTypes.CREATE_DOG_FAILED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DestroyDogAction implements Action {
  type = ActionTypes.DESTROY_DOG;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DestroyDogActionInternal implements Action {
  type = ActionTypes._DESTROY_DOG;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DogDestroyedAction implements Action {
  type = ActionTypes.DOG_DESTROYED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DestroyDogActionFailed implements Action {
  type = ActionTypes.DESTROY_DOG_FAILED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class UpdateDogAction implements Action {
  type = ActionTypes.UPDATE_DOG;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class UpdateDogActionInternal implements Action {
  type = ActionTypes._UPDATE_DOG;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class DogUpdatedAction implements Action {
  type = ActionTypes.DOG_UPDATED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

export class UpdateDogActionFailed implements Action {
  type = ActionTypes.UPDATE_DOG_FAILED;

  constructor(public payload: Model.registry.dog.IDogState) { }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {
        export interface IActionRegistry {
          TYPES: typeof ActionTypes;
          InitializeDogsAction: typeof InitializeDogsAction;
          InitializeDogsActionInternal: typeof InitializeDogsActionInternal;
          DogsInitializedAction: typeof DogsInitializedAction;
          InitializeDogsActionFailed: typeof InitializeDogsActionFailed;
          CreateDogAction: typeof CreateDogAction;
          CreateDogActionInternal: typeof CreateDogActionInternal;
          DogAddedAction: typeof DogAddedAction;
          CreateDogActionFailed: typeof CreateDogActionFailed;
          DestroyDogAction: typeof DestroyDogAction;
          DestroyDogActionInternal: typeof DestroyDogActionInternal;
          DogDestroyedAction: typeof DestroyDogAction;
          DestroyDogActionFailed: typeof DestroyDogActionFailed;
          UpdateDogAction: typeof UpdateDogAction;
          UpdateDogActionInternal: typeof UpdateDogActionInternal;
          DogUpdatedAction: typeof DogUpdatedAction;
          UpdateDogActionFailed: typeof UpdateDogActionFailed;
        }

      /**
       * Export a type alias of all actions in this action group
       * so that reducers can easily compose action types
       */
        export type Actions = 
            InitializeDogsAction
          | InitializeDogsActionInternal
          | DogsInitializedAction
          | InitializeDogsActionFailed
          | CreateDogAction
          | CreateDogActionInternal
          | DogAddedAction
          | CreateDogActionFailed
          | DestroyDogAction
          | DestroyDogActionInternal
          | DogDestroyedAction
          | DestroyDogActionFailed
          | UpdateDogAction
          | UpdateDogActionInternal
          | DogUpdatedAction
          | UpdateDogActionFailed;
      }
    }
  }
}

Object.assign(Registry.actions.registry.dog, {
  TYPES: ActionTypes,
  InitializeDogsAction: InitializeDogsAction,
  InitializeDogsActionInternal: InitializeDogsActionInternal,
  DogsInitializedAction: DogsInitializedAction,
  InitializeDogsActionFailed: InitializeDogsActionFailed,
  CreateDogAction: CreateDogAction,
  CreateDogActionInternal: CreateDogActionInternal,
  DogAddedAction: DogAddedAction,
  CreateDogActionFailed: CreateDogActionFailed,
  DestroyDogAction: DestroyDogAction,
  DestroyDogActionInternal: DestroyDogActionInternal,
  DogDestroyedAction: DestroyDogAction,
  DestroyDogActionFailed: DestroyDogActionFailed,
  UpdateDogAction: UpdateDogAction,
  UpdateDogActionInternal: UpdateDogActionInternal,
  DogUpdatedAction: DogUpdatedAction,
  UpdateDogActionFailed: UpdateDogActionFailed
});
