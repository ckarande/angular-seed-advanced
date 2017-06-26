import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IMemberClubState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IMemberClubActions {
  INITIALIZE_MEMBERCLUBS: string;
  _INITIALIZE_MEMBERCLUBS: string;
  MEMBERCLUBS_INITIALIZED: string;
  INITIALIZE_MEMBERCLUBS_FAILED: string;

  CREATE_MEMBERCLUB: string;
  _CREATE_MEMBERCLUB: string;
  MEMBERCLUB_CREATED: string;
  CREATE_MEMBERCLUB_FAILED: string;

  DESTROY_MEMBERCLUB: string;
  _DESTROY_MEMBERCLUB: string;
  MEMBERCLUB_DESTROYED: string;
  DESTROY_MEMBERCLUB_FAILED: string;

  UPDATE_MEMBERCLUB: string;
  _UPDATE_MEMBERCLUB: string;
  MEMBERCLUB_UPDATED: string;
  UPDATE_MEMBERCLUB_FAILED: string;

  FILTER_MEMBERCLUBS: string;
  SELECT_MEMBERCLUB: string;
}

export const MemberClubActionTypes: IMemberClubActions = {
  INITIALIZE_MEMBERCLUBS:          type(`${CATEGORY} Initialize MemberClubs`),
  _INITIALIZE_MEMBERCLUBS:         type(`${CATEGORY} Initialize MemberClubs (internal)`),
  MEMBERCLUBS_INITIALIZED:         type(`${CATEGORY} Initialized MemberClubs`),
  INITIALIZE_MEMBERCLUBS_FAILED:   type(`${CATEGORY} Initialize MemberClubs Failed`),

  CREATE_MEMBERCLUB:               type(`${CATEGORY} Add MemberClub`),
  _CREATE_MEMBERCLUB:              type(`${CATEGORY} Add MemberClub (internal)`),
  MEMBERCLUB_CREATED:              type(`${CATEGORY} MemberClub Added`),
  CREATE_MEMBERCLUB_FAILED:        type(`${CATEGORY} Add MemberClub Failed`),

  DESTROY_MEMBERCLUB:              type(`${CATEGORY} Destroy MemberClub`),
  _DESTROY_MEMBERCLUB:             type(`${CATEGORY} Destroy MemberClub (internal)`),
  MEMBERCLUB_DESTROYED:            type(`${CATEGORY} MemberClub Destroyed`),
  DESTROY_MEMBERCLUB_FAILED:       type(`${CATEGORY} Destroy MemberClub Failed`),

  UPDATE_MEMBERCLUB:               type(`${CATEGORY} Update MemberClub`),
  _UPDATE_MEMBERCLUB:              type(`${CATEGORY} Update MemberClub (internal)`),
  MEMBERCLUB_UPDATED:              type(`${CATEGORY} MemberClub Updated`),
  UPDATE_MEMBERCLUB_FAILED:        type(`${CATEGORY} Update MemberClub Failed`),

  FILTER_MEMBERCLUBS:              type(`${CATEGORY} Filter MemberClubs`),
  SELECT_MEMBERCLUB:               type(`${CATEGORY} Select MemberClub`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeMemberClubsAction implements Action {
  type = MemberClubActionTypes.INITIALIZE_MEMBERCLUBS;
  payload = null;
}

export class InitializeMemberClubsActionInternal implements Action {
  type = MemberClubActionTypes._INITIALIZE_MEMBERCLUBS;

  constructor(public payload: Array<IMemberClubState>) { }
}

export class MemberClubsInitializedAction implements Action {
  type = MemberClubActionTypes.MEMBERCLUBS_INITIALIZED;

  constructor(public payload: Array<IMemberClubState>) { }
}

export class InitializeMemberClubsActionFailed implements Action {
  type = MemberClubActionTypes.INITIALIZE_MEMBERCLUBS_FAILED;

  constructor(public payload: any) { }
}

export class CreateMemberClubAction implements Action {
  type: string = MemberClubActionTypes.CREATE_MEMBERCLUB;
  payload: IMemberClubState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IMemberClubState>) { 
    this.payload = message.data;
  }
}

export class CreateMemberClubActionInternal implements Action {
  type = MemberClubActionTypes._CREATE_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

export class MemberClubAddedAction implements Action {
  type = MemberClubActionTypes.MEMBERCLUB_CREATED;

  constructor(public payload: IMemberClubState) { }
}

export class CreateMemberClubActionFailed implements Action {
  type = MemberClubActionTypes.CREATE_MEMBERCLUB_FAILED;

  constructor(public payload: IMemberClubState) { }
}

export class DestroyMemberClubAction implements Action {
  type = MemberClubActionTypes.DESTROY_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

export class DestroyMemberClubActionInternal implements Action {
  type = MemberClubActionTypes._DESTROY_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

export class MemberClubDestroyedAction implements Action {
  type = MemberClubActionTypes.MEMBERCLUB_DESTROYED;

  constructor(public payload: IMemberClubState) { }
}

export class DestroyMemberClubActionFailed implements Action {
  type = MemberClubActionTypes.DESTROY_MEMBERCLUB_FAILED;

  constructor(public payload: IMemberClubState) { }
}

export class UpdateMemberClubAction implements Action {
  type = MemberClubActionTypes.UPDATE_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

export class UpdateMemberClubActionInternal implements Action {
  type = MemberClubActionTypes._UPDATE_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

export class MemberClubUpdatedAction implements Action {
  type = MemberClubActionTypes.MEMBERCLUB_UPDATED;

  constructor(public payload: IMemberClubState) { }
}

export class UpdateMemberClubActionFailed implements Action {
  type = MemberClubActionTypes.UPDATE_MEMBERCLUB_FAILED;

  constructor(public payload: IMemberClubState) { }
}

export class FilterMemberClubsAction implements Action {
  type = MemberClubActionTypes.FILTER_MEMBERCLUBS;

  constructor(public payload: string) { }
}

export class SelectMemberClubAction implements Action {
  type = MemberClubActionTypes.SELECT_MEMBERCLUB;

  constructor(public payload: IMemberClubState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MemberClubActions
  = InitializeMemberClubsAction
  | InitializeMemberClubsActionInternal
  | MemberClubsInitializedAction
  | InitializeMemberClubsActionFailed
  | CreateMemberClubAction
  | CreateMemberClubActionInternal
  | MemberClubAddedAction
  | CreateMemberClubActionFailed
  | DestroyMemberClubAction
  | DestroyMemberClubActionInternal
  | MemberClubDestroyedAction
  | DestroyMemberClubActionFailed
  | UpdateMemberClubAction
  | UpdateMemberClubActionInternal
  | MemberClubUpdatedAction
  | UpdateMemberClubActionFailed
  | FilterMemberClubsAction
  | SelectMemberClubAction;
