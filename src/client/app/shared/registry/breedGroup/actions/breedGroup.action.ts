import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IBreedGroupState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IBreedGroupActions {
  INITIALIZE_BREEDGROUPS: string;
  _INITIALIZE_BREEDGROUPS: string;
  BREEDGROUPS_INITIALIZED: string;
  INITIALIZE_BREEDGROUPS_FAILED: string;

  CREATE_BREEDGROUP: string;
  _CREATE_BREEDGROUP: string;
  BREEDGROUP_CREATED: string;
  CREATE_BREEDGROUP_FAILED: string;

  DESTROY_BREEDGROUP: string;
  _DESTROY_BREEDGROUP: string;
  BREEDGROUP_DESTROYED: string;
  DESTROY_BREEDGROUP_FAILED: string;

  UPDATE_BREEDGROUP: string;
  _UPDATE_BREEDGROUP: string;
  BREEDGROUP_UPDATED: string;
  UPDATE_BREEDGROUP_FAILED: string;

  FILTER_BREEDGROUPS: string;
  SELECT_BREEDGROUP: string;
}

export const BreedGroupActionTypes: IBreedGroupActions = {
  INITIALIZE_BREEDGROUPS:          type(`${CATEGORY} Initialize BreedGroups`),
  _INITIALIZE_BREEDGROUPS:         type(`${CATEGORY} Initialize BreedGroups (internal)`),
  BREEDGROUPS_INITIALIZED:         type(`${CATEGORY} Initialized BreedGroups`),
  INITIALIZE_BREEDGROUPS_FAILED:   type(`${CATEGORY} Initialize BreedGroups Failed`),

  CREATE_BREEDGROUP:               type(`${CATEGORY} Add BreedGroup`),
  _CREATE_BREEDGROUP:              type(`${CATEGORY} Add BreedGroup (internal)`),
  BREEDGROUP_CREATED:              type(`${CATEGORY} BreedGroup Added`),
  CREATE_BREEDGROUP_FAILED:        type(`${CATEGORY} Add BreedGroup Failed`),

  DESTROY_BREEDGROUP:              type(`${CATEGORY} Destroy BreedGroup`),
  _DESTROY_BREEDGROUP:             type(`${CATEGORY} Destroy BreedGroup (internal)`),
  BREEDGROUP_DESTROYED:            type(`${CATEGORY} BreedGroup Destroyed`),
  DESTROY_BREEDGROUP_FAILED:       type(`${CATEGORY} Destroy BreedGroup Failed`),

  UPDATE_BREEDGROUP:               type(`${CATEGORY} Update BreedGroup`),
  _UPDATE_BREEDGROUP:              type(`${CATEGORY} Update BreedGroup (internal)`),
  BREEDGROUP_UPDATED:              type(`${CATEGORY} BreedGroup Updated`),
  UPDATE_BREEDGROUP_FAILED:        type(`${CATEGORY} Update BreedGroup Failed`),

  FILTER_BREEDGROUPS:              type(`${CATEGORY} Filter BreedGroups`),
  SELECT_BREEDGROUP:               type(`${CATEGORY} Select BreedGroup`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeBreedGroupsAction implements Action {
  type = BreedGroupActionTypes.INITIALIZE_BREEDGROUPS;
  payload = null;
}

export class InitializeBreedGroupsActionInternal implements Action {
  type = BreedGroupActionTypes._INITIALIZE_BREEDGROUPS;

  constructor(public payload: Array<IBreedGroupState>) { }
}

export class BreedGroupsInitializedAction implements Action {
  type = BreedGroupActionTypes.BREEDGROUPS_INITIALIZED;

  constructor(public payload: Array<IBreedGroupState>) { }
}

export class InitializeBreedGroupsActionFailed implements Action {
  type = BreedGroupActionTypes.INITIALIZE_BREEDGROUPS_FAILED;

  constructor(public payload: any) { }
}

export class CreateBreedGroupAction implements Action {
  type: string = BreedGroupActionTypes.CREATE_BREEDGROUP;
  payload: IBreedGroupState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IBreedGroupState>) { 
    this.payload = message.data;
  }
}

export class CreateBreedGroupActionInternal implements Action {
  type = BreedGroupActionTypes._CREATE_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

export class BreedGroupAddedAction implements Action {
  type = BreedGroupActionTypes.BREEDGROUP_CREATED;

  constructor(public payload: IBreedGroupState) { }
}

export class CreateBreedGroupActionFailed implements Action {
  type = BreedGroupActionTypes.CREATE_BREEDGROUP_FAILED;

  constructor(public payload: IBreedGroupState) { }
}

export class DestroyBreedGroupAction implements Action {
  type = BreedGroupActionTypes.DESTROY_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

export class DestroyBreedGroupActionInternal implements Action {
  type = BreedGroupActionTypes._DESTROY_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

export class BreedGroupDestroyedAction implements Action {
  type = BreedGroupActionTypes.BREEDGROUP_DESTROYED;

  constructor(public payload: IBreedGroupState) { }
}

export class DestroyBreedGroupActionFailed implements Action {
  type = BreedGroupActionTypes.DESTROY_BREEDGROUP_FAILED;

  constructor(public payload: IBreedGroupState) { }
}

export class UpdateBreedGroupAction implements Action {
  type = BreedGroupActionTypes.UPDATE_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

export class UpdateBreedGroupActionInternal implements Action {
  type = BreedGroupActionTypes._UPDATE_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

export class BreedGroupUpdatedAction implements Action {
  type = BreedGroupActionTypes.BREEDGROUP_UPDATED;

  constructor(public payload: IBreedGroupState) { }
}

export class UpdateBreedGroupActionFailed implements Action {
  type = BreedGroupActionTypes.UPDATE_BREEDGROUP_FAILED;

  constructor(public payload: IBreedGroupState) { }
}

export class FilterBreedGroupsAction implements Action {
  type = BreedGroupActionTypes.FILTER_BREEDGROUPS;

  constructor(public payload: string) { }
}

export class SelectBreedGroupAction implements Action {
  type = BreedGroupActionTypes.SELECT_BREEDGROUP;

  constructor(public payload: IBreedGroupState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BreedGroupActions
  = InitializeBreedGroupsAction
  | InitializeBreedGroupsActionInternal
  | BreedGroupsInitializedAction
  | InitializeBreedGroupsActionFailed
  | CreateBreedGroupAction
  | CreateBreedGroupActionInternal
  | BreedGroupAddedAction
  | CreateBreedGroupActionFailed
  | DestroyBreedGroupAction
  | DestroyBreedGroupActionInternal
  | BreedGroupDestroyedAction
  | DestroyBreedGroupActionFailed
  | UpdateBreedGroupAction
  | UpdateBreedGroupActionInternal
  | BreedGroupUpdatedAction
  | UpdateBreedGroupActionFailed
  | FilterBreedGroupsAction
  | SelectBreedGroupAction;
