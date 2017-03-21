import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IDogState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IDogActions {
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

  FILTER_DOGS: string;
  SELECT_DOG: string;
}

export const DogActionTypes: IDogActions = {
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
  UPDATE_DOG_FAILED:        type(`${CATEGORY} Update Dog Failed`),

  FILTER_DOGS:              type(`${CATEGORY} Filter Dogs`),
  SELECT_DOG:               type(`${CATEGORY} Select Dog`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeDogsAction implements Action {
  type = DogActionTypes.INITIALIZE_DOGS;
  payload = null;
}

export class InitializeDogsActionInternal implements Action {
  type = DogActionTypes._INITIALIZE_DOGS;

  constructor(public payload: Array<IDogState>) { }
}

export class DogsInitializedAction implements Action {
  type = DogActionTypes.DOGS_INITIALIZED;

  constructor(public payload: Array<IDogState>) { }
}

export class InitializeDogsActionFailed implements Action {
  type = DogActionTypes.INITIALIZE_DOGS_FAILED;

  constructor(public payload: any) { }
}

export class CreateDogAction implements Action {
  type: string = DogActionTypes.CREATE_DOG;
  payload: IDogState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IDogState>) { 
    this.payload = message.data;
  }
}

export class CreateDogActionInternal implements Action {
  type = DogActionTypes._CREATE_DOG;

  constructor(public payload: IDogState) { }
}

export class DogAddedAction implements Action {
  type = DogActionTypes.DOG_CREATED;

  constructor(public payload: IDogState) { }
}

export class CreateDogActionFailed implements Action {
  type = DogActionTypes.CREATE_DOG_FAILED;

  constructor(public payload: IDogState) { }
}

export class DestroyDogAction implements Action {
  type = DogActionTypes.DESTROY_DOG;

  constructor(public payload: IDogState) { }
}

export class DestroyDogActionInternal implements Action {
  type = DogActionTypes._DESTROY_DOG;

  constructor(public payload: IDogState) { }
}

export class DogDestroyedAction implements Action {
  type = DogActionTypes.DOG_DESTROYED;

  constructor(public payload: IDogState) { }
}

export class DestroyDogActionFailed implements Action {
  type = DogActionTypes.DESTROY_DOG_FAILED;

  constructor(public payload: IDogState) { }
}

export class UpdateDogAction implements Action {
  type = DogActionTypes.UPDATE_DOG;

  constructor(public payload: IDogState) { }
}

export class UpdateDogActionInternal implements Action {
  type = DogActionTypes._UPDATE_DOG;

  constructor(public payload: IDogState) { }
}

export class DogUpdatedAction implements Action {
  type = DogActionTypes.DOG_UPDATED;

  constructor(public payload: IDogState) { }
}

export class UpdateDogActionFailed implements Action {
  type = DogActionTypes.UPDATE_DOG_FAILED;

  constructor(public payload: IDogState) { }
}

export class FilterDogsAction implements Action {
  type = DogActionTypes.FILTER_DOGS;

  constructor(public payload: string) { }
}

export class SelectDogAction implements Action {
  type = DogActionTypes.SELECT_DOG;

  constructor(public payload: IDogState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DogActions
  = InitializeDogsAction
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
  | UpdateDogActionFailed
  | FilterDogsAction
  | SelectDogAction;
