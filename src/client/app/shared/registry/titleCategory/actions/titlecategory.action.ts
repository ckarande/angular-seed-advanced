import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { ITitleCategoryState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface ITitleCategoryActions {
  INITIALIZE_TITLECATEGORIES: string;
  _INITIALIZE_TITLECATEGORIES: string;
  TITLECATEGORIES_INITIALIZED: string;
  INITIALIZE_TITLECATEGORIES_FAILED: string;

  CREATE_TITLECATEGORY: string;
  _CREATE_TITLECATEGORY: string;
  TITLECATEGORY_CREATED: string;
  CREATE_TITLECATEGORY_FAILED: string;

  DESTROY_TITLECATEGORY: string;
  _DESTROY_TITLECATEGORY: string;
  TITLECATEGORY_DESTROYED: string;
  DESTROY_TITLECATEGORY_FAILED: string;

  UPDATE_TITLECATEGORY: string;
  _UPDATE_TITLECATEGORY: string;
  TITLECATEGORY_UPDATED: string;
  UPDATE_TITLECATEGORY_FAILED: string;

  FILTER_TITLECATEGORIES: string;
  SELECT_TITLECATEGORY: string;
}

export const TitleCategoryActionTypes: ITitleCategoryActions = {
  INITIALIZE_TITLECATEGORIES:          type(`${CATEGORY} Initialize TitleCategoriesl`),
  _INITIALIZE_TITLECATEGORIES:         type(`${CATEGORY} Initialize TitleCategories (internal)`),
  TITLECATEGORIES_INITIALIZED:         type(`${CATEGORY} Initialized TitleCategories`),
  INITIALIZE_TITLECATEGORIES_FAILED:   type(`${CATEGORY} Initialize TitleCategories Failed`),

  CREATE_TITLECATEGORY:               type(`${CATEGORY} Add TitleCategory`),
  _CREATE_TITLECATEGORY:              type(`${CATEGORY} Add TitleCategory (internal)`),
  TITLECATEGORY_CREATED:              type(`${CATEGORY} TitleCategory Added`),
  CREATE_TITLECATEGORY_FAILED:        type(`${CATEGORY} Add TitleCategory Failed`),

  DESTROY_TITLECATEGORY:              type(`${CATEGORY} Destroy TitleCategory`),
  _DESTROY_TITLECATEGORY:             type(`${CATEGORY} Destroy TitleCategory (internal)`),
  TITLECATEGORY_DESTROYED:            type(`${CATEGORY} TitleCategory Destroyed`),
  DESTROY_TITLECATEGORY_FAILED:       type(`${CATEGORY} Destroy TitleCategory Failed`),

  UPDATE_TITLECATEGORY:               type(`${CATEGORY} Update TitleCategory`),
  _UPDATE_TITLECATEGORY:              type(`${CATEGORY} Update TitleCategory (internal)`),
  TITLECATEGORY_UPDATED:              type(`${CATEGORY} TitleCategory Updated`),
  UPDATE_TITLECATEGORY_FAILED:        type(`${CATEGORY} Update TitleCategory Failed`),

  FILTER_TITLECATEGORIES:              type(`${CATEGORY} Filter TitleCategories`),
  SELECT_TITLECATEGORY:               type(`${CATEGORY} Select TitleCategory`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeTitleCategoriesAction implements Action {
  type = TitleCategoryActionTypes.INITIALIZE_TITLECATEGORIES;
  payload = null;
}

export class InitializeTitleCategoriesActionInternal implements Action {
  type = TitleCategoryActionTypes._INITIALIZE_TITLECATEGORIES;

  constructor(public payload: Array<ITitleCategoryState>) { }
}

export class TitleCategoriesInitializedAction implements Action {
  type = TitleCategoryActionTypes.TITLECATEGORIES_INITIALIZED;

  constructor(public payload: Array<ITitleCategoryState>) { }
}

export class InitializeTitleCategoriesActionFailed implements Action {
  type = TitleCategoryActionTypes.INITIALIZE_TITLECATEGORIES_FAILED;

  constructor(public payload: any) { }
}

export class CreateTitleCategoryAction implements Action {
  type: string = TitleCategoryActionTypes.CREATE_TITLECATEGORY;
  payload: ITitleCategoryState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<ITitleCategoryState>) { 
    this.payload = message.data;
  }
}

export class CreateTitleCategoryActionInternal implements Action {
  type = TitleCategoryActionTypes._CREATE_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

export class TitleCategoryAddedAction implements Action {
  type = TitleCategoryActionTypes.TITLECATEGORY_CREATED;

  constructor(public payload: ITitleCategoryState) { }
}

export class CreateTitleCategoryActionFailed implements Action {
  type = TitleCategoryActionTypes.CREATE_TITLECATEGORY_FAILED;

  constructor(public payload: ITitleCategoryState) { }
}

export class DestroyTitleCategoryAction implements Action {
  type = TitleCategoryActionTypes.DESTROY_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

export class DestroyTitleCategoryActionInternal implements Action {
  type = TitleCategoryActionTypes._DESTROY_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

export class TitleCategoryDestroyedAction implements Action {
  type = TitleCategoryActionTypes.TITLECATEGORY_DESTROYED;

  constructor(public payload: ITitleCategoryState) { }
}

export class DestroyTitleCategoryActionFailed implements Action {
  type = TitleCategoryActionTypes.DESTROY_TITLECATEGORY_FAILED;

  constructor(public payload: ITitleCategoryState) { }
}

export class UpdateTitleCategoryAction implements Action {
  type = TitleCategoryActionTypes.UPDATE_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

export class UpdateTitleCategoryActionInternal implements Action {
  type = TitleCategoryActionTypes._UPDATE_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

export class TitleCategoryUpdatedAction implements Action {
  type = TitleCategoryActionTypes.TITLECATEGORY_UPDATED;

  constructor(public payload: ITitleCategoryState) { }
}

export class UpdateTitleCategoryActionFailed implements Action {
  type = TitleCategoryActionTypes.UPDATE_TITLECATEGORY_FAILED;

  constructor(public payload: ITitleCategoryState) { }
}

export class FilterTitleCategoriesAction implements Action {
  type = TitleCategoryActionTypes.FILTER_TITLECATEGORIES;

  constructor(public payload: string) { }
}

export class SelectTitleCategoryAction implements Action {
  type = TitleCategoryActionTypes.SELECT_TITLECATEGORY;

  constructor(public payload: ITitleCategoryState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TitleCategoryActions
  = InitializeTitleCategoriesAction
  | InitializeTitleCategoriesActionInternal
  | TitleCategoriesInitializedAction
  | InitializeTitleCategoriesActionFailed
  | CreateTitleCategoryAction
  | CreateTitleCategoryActionInternal
  | TitleCategoryAddedAction
  | CreateTitleCategoryActionFailed
  | DestroyTitleCategoryAction
  | DestroyTitleCategoryActionInternal
  | TitleCategoryDestroyedAction
  | DestroyTitleCategoryActionFailed
  | UpdateTitleCategoryAction
  | UpdateTitleCategoryActionInternal
  | TitleCategoryUpdatedAction
  | UpdateTitleCategoryActionFailed
  | FilterTitleCategoriesAction
  | SelectTitleCategoryAction;
