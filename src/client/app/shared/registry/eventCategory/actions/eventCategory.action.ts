import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IEventCategoryState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IEventCategoryActions {
  INITIALIZE_EVENTCATEGORIES: string;
  _INITIALIZE_EVENTCATEGORIES: string;
  EVENTCATEGORIES_INITIALIZED: string;
  INITIALIZE_EVENTCATEGORIES_FAILED: string;

  CREATE_EVENTCATEGORY: string;
  _CREATE_EVENTCATEGORY: string;
  EVENTCATEGORY_CREATED: string;
  CREATE_EVENTCATEGORY_FAILED: string;

  DESTROY_EVENTCATEGORY: string;
  _DESTROY_EVENTCATEGORY: string;
  EVENTCATEGORY_DESTROYED: string;
  DESTROY_EVENTCATEGORY_FAILED: string;

  UPDATE_EVENTCATEGORY: string;
  _UPDATE_EVENTCATEGORY: string;
  EVENTCATEGORY_UPDATED: string;
  UPDATE_EVENTCATEGORY_FAILED: string;

  FILTER_EVENTCATEGORIES: string;
  SELECT_EVENTCATEGORY: string;
}

export const EventCategoryActionTypes: IEventCategoryActions = {
  INITIALIZE_EVENTCATEGORIES:          type(`${CATEGORY} Initialize EventCategories`),
  _INITIALIZE_EVENTCATEGORIES:         type(`${CATEGORY} Initialize EventCategories (internal)`),
  EVENTCATEGORIES_INITIALIZED:         type(`${CATEGORY} Initialized EventCategories`),
  INITIALIZE_EVENTCATEGORIES_FAILED:   type(`${CATEGORY} Initialize EventCategories Failed`),

  CREATE_EVENTCATEGORY:               type(`${CATEGORY} Add EventCategory`),
  _CREATE_EVENTCATEGORY:              type(`${CATEGORY} Add EventCategory (internal)`),
  EVENTCATEGORY_CREATED:              type(`${CATEGORY} EventCategory Added`),
  CREATE_EVENTCATEGORY_FAILED:        type(`${CATEGORY} Add EventCategory Failed`),

  DESTROY_EVENTCATEGORY:              type(`${CATEGORY} Destroy EventCategory`),
  _DESTROY_EVENTCATEGORY:             type(`${CATEGORY} Destroy EventCategory (internal)`),
  EVENTCATEGORY_DESTROYED:            type(`${CATEGORY} EventCategory Destroyed`),
  DESTROY_EVENTCATEGORY_FAILED:       type(`${CATEGORY} Destroy EventCategory Failed`),

  UPDATE_EVENTCATEGORY:               type(`${CATEGORY} Update EventCategory`),
  _UPDATE_EVENTCATEGORY:              type(`${CATEGORY} Update EventCategory (internal)`),
  EVENTCATEGORY_UPDATED:              type(`${CATEGORY} EventCategory Updated`),
  UPDATE_EVENTCATEGORY_FAILED:        type(`${CATEGORY} Update EventCategory Failed`),

  FILTER_EVENTCATEGORIES:              type(`${CATEGORY} Filter EventCategories`),
  SELECT_EVENTCATEGORY:               type(`${CATEGORY} Select EventCategory`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeEventCategoriesAction implements Action {
  type = EventCategoryActionTypes.INITIALIZE_EVENTCATEGORIES;
  payload = null;
}

export class InitializeEventCategoriesActionInternal implements Action {
  type = EventCategoryActionTypes._INITIALIZE_EVENTCATEGORIES;

  constructor(public payload: Array<IEventCategoryState>) { }
}

export class EventCategoriesInitializedAction implements Action {
  type = EventCategoryActionTypes.EVENTCATEGORIES_INITIALIZED;

  constructor(public payload: Array<IEventCategoryState>) { }
}

export class InitializeEventCategoriesActionFailed implements Action {
  type = EventCategoryActionTypes.INITIALIZE_EVENTCATEGORIES_FAILED;

  constructor(public payload: any) { }
}

export class CreateEventCategoryAction implements Action {
  type: string = EventCategoryActionTypes.CREATE_EVENTCATEGORY;
  payload: IEventCategoryState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IEventCategoryState>) { 
    this.payload = message.data;
  }
}

export class CreateEventCategoryActionInternal implements Action {
  type = EventCategoryActionTypes._CREATE_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

export class EventCategoryAddedAction implements Action {
  type = EventCategoryActionTypes.EVENTCATEGORY_CREATED;

  constructor(public payload: IEventCategoryState) { }
}

export class CreateEventCategoryActionFailed implements Action {
  type = EventCategoryActionTypes.CREATE_EVENTCATEGORY_FAILED;

  constructor(public payload: IEventCategoryState) { }
}

export class DestroyEventCategoryAction implements Action {
  type = EventCategoryActionTypes.DESTROY_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

export class DestroyEventCategoryActionInternal implements Action {
  type = EventCategoryActionTypes._DESTROY_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

export class EventCategoryDestroyedAction implements Action {
  type = EventCategoryActionTypes.EVENTCATEGORY_DESTROYED;

  constructor(public payload: IEventCategoryState) { }
}

export class DestroyEventCategoryActionFailed implements Action {
  type = EventCategoryActionTypes.DESTROY_EVENTCATEGORY_FAILED;

  constructor(public payload: IEventCategoryState) { }
}

export class UpdateEventCategoryAction implements Action {
  type = EventCategoryActionTypes.UPDATE_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

export class UpdateEventCategoryActionInternal implements Action {
  type = EventCategoryActionTypes._UPDATE_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

export class EventCategoryUpdatedAction implements Action {
  type = EventCategoryActionTypes.EVENTCATEGORY_UPDATED;

  constructor(public payload: IEventCategoryState) { }
}

export class UpdateEventCategoryActionFailed implements Action {
  type = EventCategoryActionTypes.UPDATE_EVENTCATEGORY_FAILED;

  constructor(public payload: IEventCategoryState) { }
}

export class FilterEventCategoriesAction implements Action {
  type = EventCategoryActionTypes.FILTER_EVENTCATEGORIES;

  constructor(public payload: string) { }
}

export class SelectEventCategoryAction implements Action {
  type = EventCategoryActionTypes.SELECT_EVENTCATEGORY;

  constructor(public payload: IEventCategoryState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type EventCategoryActions
  = InitializeEventCategoriesAction
  | InitializeEventCategoriesActionInternal
  | EventCategoriesInitializedAction
  | InitializeEventCategoriesActionFailed
  | CreateEventCategoryAction
  | CreateEventCategoryActionInternal
  | EventCategoryAddedAction
  | CreateEventCategoryActionFailed
  | DestroyEventCategoryAction
  | DestroyEventCategoryActionInternal
  | EventCategoryDestroyedAction
  | DestroyEventCategoryActionFailed
  | UpdateEventCategoryAction
  | UpdateEventCategoryActionInternal
  | EventCategoryUpdatedAction
  | UpdateEventCategoryActionFailed
  | FilterEventCategoriesAction
  | SelectEventCategoryAction;
