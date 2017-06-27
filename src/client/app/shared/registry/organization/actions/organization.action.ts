import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IOrganizationState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IOrganizationActions {
  INITIALIZE_ORGANIZATIONS: string;
  _INITIALIZE_ORGANIZATIONS: string;
  ORGANIZATIONS_INITIALIZED: string;
  INITIALIZE_ORGANIZATIONS_FAILED: string;

  CREATE_ORGANIZATION: string;
  _CREATE_ORGANIZATION: string;
  ORGANIZATION_CREATED: string;
  CREATE_ORGANIZATION_FAILED: string;

  DESTROY_ORGANIZATION: string;
  _DESTROY_ORGANIZATION: string;
  ORGANIZATION_DESTROYED: string;
  DESTROY_ORGANIZATION_FAILED: string;

  UPDATE_ORGANIZATION: string;
  _UPDATE_ORGANIZATION: string;
  ORGANIZATION_UPDATED: string;
  UPDATE_ORGANIZATION_FAILED: string;

  FILTER_ORGANIZATIONS: string;
  SELECT_ORGANIZATION: string;
}

export const OrganizationActionTypes: IOrganizationActions = {
  INITIALIZE_ORGANIZATIONS:          type(`${CATEGORY} Initialize Organizations`),
  _INITIALIZE_ORGANIZATIONS:         type(`${CATEGORY} Initialize Organizations (internal)`),
  ORGANIZATIONS_INITIALIZED:         type(`${CATEGORY} Initialized Organizations`),
  INITIALIZE_ORGANIZATIONS_FAILED:   type(`${CATEGORY} Initialize Organizations Failed`),

  CREATE_ORGANIZATION:               type(`${CATEGORY} Add Organization`),
  _CREATE_ORGANIZATION:              type(`${CATEGORY} Add Organization (internal)`),
  ORGANIZATION_CREATED:              type(`${CATEGORY} Organization Added`),
  CREATE_ORGANIZATION_FAILED:        type(`${CATEGORY} Add Organization Failed`),

  DESTROY_ORGANIZATION:              type(`${CATEGORY} Destroy Organization`),
  _DESTROY_ORGANIZATION:             type(`${CATEGORY} Destroy Organization (internal)`),
  ORGANIZATION_DESTROYED:            type(`${CATEGORY} Organization Destroyed`),
  DESTROY_ORGANIZATION_FAILED:       type(`${CATEGORY} Destroy Organization Failed`),

  UPDATE_ORGANIZATION:               type(`${CATEGORY} Update Organization`),
  _UPDATE_ORGANIZATION:              type(`${CATEGORY} Update Organization (internal)`),
  ORGANIZATION_UPDATED:              type(`${CATEGORY} Organization Updated`),
  UPDATE_ORGANIZATION_FAILED:        type(`${CATEGORY} Update Organization Failed`),

  FILTER_ORGANIZATIONS:              type(`${CATEGORY} Filter Organizations`),
  SELECT_ORGANIZATION:               type(`${CATEGORY} Select Organization`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeOrganizationsAction implements Action {
  type = OrganizationActionTypes.INITIALIZE_ORGANIZATIONS;
  payload = null;
}

export class InitializeOrganizationsActionInternal implements Action {
  type = OrganizationActionTypes._INITIALIZE_ORGANIZATIONS;

  constructor(public payload: Array<IOrganizationState>) { }
}

export class OrganizationsInitializedAction implements Action {
  type = OrganizationActionTypes.ORGANIZATIONS_INITIALIZED;

  constructor(public payload: Array<IOrganizationState>) { }
}

export class InitializeOrganizationsActionFailed implements Action {
  type = OrganizationActionTypes.INITIALIZE_ORGANIZATIONS_FAILED;

  constructor(public payload: any) { }
}

export class CreateOrganizationAction implements Action {
  type: string = OrganizationActionTypes.CREATE_ORGANIZATION;
  payload: IOrganizationState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IOrganizationState>) { 
    this.payload = message.data;
  }
}

export class CreateOrganizationActionInternal implements Action {
  type = OrganizationActionTypes._CREATE_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

export class OrganizationAddedAction implements Action {
  type = OrganizationActionTypes.ORGANIZATION_CREATED;

  constructor(public payload: IOrganizationState) { }
}

export class CreateOrganizationActionFailed implements Action {
  type = OrganizationActionTypes.CREATE_ORGANIZATION_FAILED;

  constructor(public payload: IOrganizationState) { }
}

export class DestroyOrganizationAction implements Action {
  type = OrganizationActionTypes.DESTROY_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

export class DestroyOrganizationActionInternal implements Action {
  type = OrganizationActionTypes._DESTROY_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

export class OrganizationDestroyedAction implements Action {
  type = OrganizationActionTypes.ORGANIZATION_DESTROYED;

  constructor(public payload: IOrganizationState) { }
}

export class DestroyOrganizationActionFailed implements Action {
  type = OrganizationActionTypes.DESTROY_ORGANIZATION_FAILED;

  constructor(public payload: IOrganizationState) { }
}

export class UpdateOrganizationAction implements Action {
  type = OrganizationActionTypes.UPDATE_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

export class UpdateOrganizationActionInternal implements Action {
  type = OrganizationActionTypes._UPDATE_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

export class OrganizationUpdatedAction implements Action {
  type = OrganizationActionTypes.ORGANIZATION_UPDATED;

  constructor(public payload: IOrganizationState) { }
}

export class UpdateOrganizationActionFailed implements Action {
  type = OrganizationActionTypes.UPDATE_ORGANIZATION_FAILED;

  constructor(public payload: IOrganizationState) { }
}

export class FilterOrganizationsAction implements Action {
  type = OrganizationActionTypes.FILTER_ORGANIZATIONS;

  constructor(public payload: string) { }
}

export class SelectOrganizationAction implements Action {
  type = OrganizationActionTypes.SELECT_ORGANIZATION;

  constructor(public payload: IOrganizationState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type OrganizationActions
  = InitializeOrganizationsAction
  | InitializeOrganizationsActionInternal
  | OrganizationsInitializedAction
  | InitializeOrganizationsActionFailed
  | CreateOrganizationAction
  | CreateOrganizationActionInternal
  | OrganizationAddedAction
  | CreateOrganizationActionFailed
  | DestroyOrganizationAction
  | DestroyOrganizationActionInternal
  | OrganizationDestroyedAction
  | DestroyOrganizationActionFailed
  | UpdateOrganizationAction
  | UpdateOrganizationActionInternal
  | OrganizationUpdatedAction
  | UpdateOrganizationActionFailed
  | FilterOrganizationsAction
  | SelectOrganizationAction;
