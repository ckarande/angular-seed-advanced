import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IBreedState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IBreedActions {
  INITIALIZE_BREEDS: string;
  _INITIALIZE_BREEDS: string;
  BREEDS_INITIALIZED: string;
  INITIALIZE_BREEDS_FAILED: string;

  CREATE_BREED: string;
  _CREATE_BREED: string;
  BREED_CREATED: string;
  CREATE_BREED_FAILED: string;

  DESTROY_BREED: string;
  _DESTROY_BREED: string;
  BREED_DESTROYED: string;
  DESTROY_BREED_FAILED: string;

  UPDATE_BREED: string;
  _UPDATE_BREED: string;
  BREED_UPDATED: string;
  UPDATE_BREED_FAILED: string;

  FILTER_BREEDS: string;
  SELECT_BREED: string;
}

export const BreedActionTypes: IBreedActions = {
  INITIALIZE_BREEDS:          type(`${CATEGORY} Initialize Breeds`),
  _INITIALIZE_BREEDS:         type(`${CATEGORY} Initialize Breeds (internal)`),
  BREEDS_INITIALIZED:         type(`${CATEGORY} Initialized Breeds`),
  INITIALIZE_BREEDS_FAILED:   type(`${CATEGORY} Initialize Breeds Failed`),

  CREATE_BREED:               type(`${CATEGORY} Add Breed`),
  _CREATE_BREED:              type(`${CATEGORY} Add Breed (internal)`),
  BREED_CREATED:              type(`${CATEGORY} Breed Added`),
  CREATE_BREED_FAILED:        type(`${CATEGORY} Add Breed Failed`),

  DESTROY_BREED:              type(`${CATEGORY} Destroy Breed`),
  _DESTROY_BREED:             type(`${CATEGORY} Destroy Breed (internal)`),
  BREED_DESTROYED:            type(`${CATEGORY} Breed Destroyed`),
  DESTROY_BREED_FAILED:       type(`${CATEGORY} Destroy Breed Failed`),

  UPDATE_BREED:               type(`${CATEGORY} Update Breed`),
  _UPDATE_BREED:              type(`${CATEGORY} Update Breed (internal)`),
  BREED_UPDATED:              type(`${CATEGORY} Breed Updated`),
  UPDATE_BREED_FAILED:        type(`${CATEGORY} Update Breed Failed`),

  FILTER_BREEDS:              type(`${CATEGORY} Filter Breeds`),
  SELECT_BREED:               type(`${CATEGORY} Select Breed`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeBreedsAction implements Action {
  type = BreedActionTypes.INITIALIZE_BREEDS;
  payload = null;
}

export class InitializeBreedsActionInternal implements Action {
  type = BreedActionTypes._INITIALIZE_BREEDS;

  constructor(public payload: Array<IBreedState>) { }
}

export class BreedsInitializedAction implements Action {
  type = BreedActionTypes.BREEDS_INITIALIZED;

  constructor(public payload: Array<IBreedState>) { }
}

export class InitializeBreedsActionFailed implements Action {
  type = BreedActionTypes.INITIALIZE_BREEDS_FAILED;

  constructor(public payload: any) { }
}

export class CreateBreedAction implements Action {
  type: string = BreedActionTypes.CREATE_BREED;
  payload: IBreedState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IBreedState>) { 
    this.payload = message.data;
  }
}

export class CreateBreedActionInternal implements Action {
  type = BreedActionTypes._CREATE_BREED;

  constructor(public payload: IBreedState) { }
}

export class BreedAddedAction implements Action {
  type = BreedActionTypes.BREED_CREATED;

  constructor(public payload: IBreedState) { }
}

export class CreateBreedActionFailed implements Action {
  type = BreedActionTypes.CREATE_BREED_FAILED;

  constructor(public payload: IBreedState) { }
}

export class DestroyBreedAction implements Action {
  type = BreedActionTypes.DESTROY_BREED;

  constructor(public payload: IBreedState) { }
}

export class DestroyBreedActionInternal implements Action {
  type = BreedActionTypes._DESTROY_BREED;

  constructor(public payload: IBreedState) { }
}

export class BreedDestroyedAction implements Action {
  type = BreedActionTypes.BREED_DESTROYED;

  constructor(public payload: IBreedState) { }
}

export class DestroyBreedActionFailed implements Action {
  type = BreedActionTypes.DESTROY_BREED_FAILED;

  constructor(public payload: IBreedState) { }
}

export class UpdateBreedAction implements Action {
  type = BreedActionTypes.UPDATE_BREED;

  constructor(public payload: IBreedState) { }
}

export class UpdateBreedActionInternal implements Action {
  type = BreedActionTypes._UPDATE_BREED;

  constructor(public payload: IBreedState) { }
}

export class BreedUpdatedAction implements Action {
  type = BreedActionTypes.BREED_UPDATED;

  constructor(public payload: IBreedState) { }
}

export class UpdateBreedActionFailed implements Action {
  type = BreedActionTypes.UPDATE_BREED_FAILED;

  constructor(public payload: IBreedState) { }
}

export class FilterBreedsAction implements Action {
  type = BreedActionTypes.FILTER_BREEDS;

  constructor(public payload: string) { }
}

export class SelectBreedAction implements Action {
  type = BreedActionTypes.SELECT_BREED;

  constructor(public payload: IBreedState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BreedActions
  = InitializeBreedsAction
  | InitializeBreedsActionInternal
  | BreedsInitializedAction
  | InitializeBreedsActionFailed
  | CreateBreedAction
  | CreateBreedActionInternal
  | BreedAddedAction
  | CreateBreedActionFailed
  | DestroyBreedAction
  | DestroyBreedActionInternal
  | BreedDestroyedAction
  | DestroyBreedActionFailed
  | UpdateBreedAction
  | UpdateBreedActionInternal
  | BreedUpdatedAction
  | UpdateBreedActionFailed
  | FilterBreedsAction
  | SelectBreedAction;
