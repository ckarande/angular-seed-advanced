// libs
import { Action } from '@ngrx/store';
import { Registry, Model } from 'ngrx-registry';

// app
const type = Registry.classes.core.type;

// module
const CATEGORY = Registry.categories.sample.CATEGORY;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {

      /**
       * For each action type in an action group, make a simple
       * enum object for all of this group's action types.
       *
       * The 'type' utility function coerces strings into string
       * literal types and runs a simple check to guarantee all
       * action types in the application are unique.
       */
      export interface INameListActions {
        INIT: string;
        INITIALIZED: string;
        INIT_FAILED: string;
        ADD: string;
        NAME_ADDED: string;
      }

    }
  }
}

export const ActionTypes: Model.sample.INameListActions = {
  INIT:        type(`${CATEGORY} Init`),
  INITIALIZED: type(`${CATEGORY} Initialized`),
  INIT_FAILED: type(`${CATEGORY} Init Failed`),
  ADD:         type(`${CATEGORY} Add`),
  NAME_ADDED:  type(`${CATEGORY} Name Added`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitAction implements Action {
  type = ActionTypes.INIT;
  payload: string = null;
}

export class InitializedAction implements Action {
  type = ActionTypes.INITIALIZED;

  constructor(public payload: Array<string>) { }
}

export class InitFailedAction implements Action {
  type = ActionTypes.INIT_FAILED;
  payload: string = null;
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: string) { }
}

export class NameAddedAction implements Action {
  type = ActionTypes.NAME_ADDED;

  constructor(public payload: string) { }
}


declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {

      export interface IActionRegistry {
        TYPES: typeof ActionTypes;
        InitAction: typeof InitAction;
        InitializedAction: typeof InitializedAction;
        InitFailedAction: typeof InitFailedAction;
        AddAction: typeof AddAction;
        NameAddedAction: typeof NameAddedAction;
      }

    /**
     * Export a type alias of all actions in this action group
     * so that reducers can easily compose action types
     */
      export type Actions
        = InitAction
        | InitializedAction
        | InitFailedAction
        | AddAction
        | NameAddedAction;

    }
  }
}

Object.assign(Registry.actions.sample, {
  TYPES: ActionTypes,
  InitAction: InitAction,
  InitializedAction: InitializedAction,
  InitFailedAction: InitFailedAction,
  AddAction: AddAction,
  NameAddedAction: NameAddedAction
});
