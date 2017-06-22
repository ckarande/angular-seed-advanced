import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { ITitleState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface ITitleActions {
  INITIALIZE_TITLES: string;
  _INITIALIZE_TITLES: string;
  TITLES_INITIALIZED: string;
  INITIALIZE_TITLES_FAILED: string;

  CREATE_TITLE: string;
  _CREATE_TITLE: string;
  TITLE_CREATED: string;
  CREATE_TITLE_FAILED: string;

  DESTROY_TITLE: string;
  _DESTROY_TITLE: string;
  TITLE_DESTROYED: string;
  DESTROY_TITLE_FAILED: string;

  UPDATE_TITLE: string;
  _UPDATE_TITLE: string;
  TITLE_UPDATED: string;
  UPDATE_TITLE_FAILED: string;

  FILTER_TITLES: string;
  SELECT_TITLE: string;
}

export const TitleActionTypes: ITitleActions = {
  INITIALIZE_TITLES:          type(`${CATEGORY} Initialize Titles`),
  _INITIALIZE_TITLES:         type(`${CATEGORY} Initialize Titles (internal)`),
  TITLES_INITIALIZED:         type(`${CATEGORY} Initialized Titles`),
  INITIALIZE_TITLES_FAILED:   type(`${CATEGORY} Initialize Titles Failed`),

  CREATE_TITLE:               type(`${CATEGORY} Add Title`),
  _CREATE_TITLE:              type(`${CATEGORY} Add Title (internal)`),
  TITLE_CREATED:              type(`${CATEGORY} Title Added`),
  CREATE_TITLE_FAILED:        type(`${CATEGORY} Add Title Failed`),

  DESTROY_TITLE:              type(`${CATEGORY} Destroy Title`),
  _DESTROY_TITLE:             type(`${CATEGORY} Destroy Title (internal)`),
  TITLE_DESTROYED:            type(`${CATEGORY} Title Destroyed`),
  DESTROY_TITLE_FAILED:       type(`${CATEGORY} Destroy Title Failed`),

  UPDATE_TITLE:               type(`${CATEGORY} Update Title`),
  _UPDATE_TITLE:              type(`${CATEGORY} Update Title (internal)`),
  TITLE_UPDATED:              type(`${CATEGORY} Title Updated`),
  UPDATE_TITLE_FAILED:        type(`${CATEGORY} Update Title Failed`),

  FILTER_TITLES:              type(`${CATEGORY} Filter Titles`),
  SELECT_TITLE:               type(`${CATEGORY} Select Title`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeTitlesAction implements Action {
  type = TitleActionTypes.INITIALIZE_TITLES;
  payload = null;
}

export class InitializeTitlesActionInternal implements Action {
  type = TitleActionTypes._INITIALIZE_TITLES;

  constructor(public payload: Array<ITitleState>) { }
}

export class TitlesInitializedAction implements Action {
  type = TitleActionTypes.TITLES_INITIALIZED;

  constructor(public payload: Array<ITitleState>) { }
}

export class InitializeTitlesActionFailed implements Action {
  type = TitleActionTypes.INITIALIZE_TITLES_FAILED;

  constructor(public payload: any) { }
}

export class CreateTitleAction implements Action {
  type: string = TitleActionTypes.CREATE_TITLE;
  payload: ITitleState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<ITitleState>) { 
    this.payload = message.data;
  }
}

export class CreateTitleActionInternal implements Action {
  type = TitleActionTypes._CREATE_TITLE;

  constructor(public payload: ITitleState) { }
}

export class TitleAddedAction implements Action {
  type = TitleActionTypes.TITLE_CREATED;

  constructor(public payload: ITitleState) { }
}

export class CreateTitleActionFailed implements Action {
  type = TitleActionTypes.CREATE_TITLE_FAILED;

  constructor(public payload: ITitleState) { }
}

export class DestroyTitleAction implements Action {
  type = TitleActionTypes.DESTROY_TITLE;

  constructor(public payload: ITitleState) { }
}

export class DestroyTitleActionInternal implements Action {
  type = TitleActionTypes._DESTROY_TITLE;

  constructor(public payload: ITitleState) { }
}

export class TitleDestroyedAction implements Action {
  type = TitleActionTypes.TITLE_DESTROYED;

  constructor(public payload: ITitleState) { }
}

export class DestroyTitleActionFailed implements Action {
  type = TitleActionTypes.DESTROY_TITLE_FAILED;

  constructor(public payload: ITitleState) { }
}

export class UpdateTitleAction implements Action {
  type = TitleActionTypes.UPDATE_TITLE;

  constructor(public payload: ITitleState) { }
}

export class UpdateTitleActionInternal implements Action {
  type = TitleActionTypes._UPDATE_TITLE;

  constructor(public payload: ITitleState) { }
}

export class TitleUpdatedAction implements Action {
  type = TitleActionTypes.TITLE_UPDATED;

  constructor(public payload: ITitleState) { }
}

export class UpdateTitleActionFailed implements Action {
  type = TitleActionTypes.UPDATE_TITLE_FAILED;

  constructor(public payload: ITitleState) { }
}

export class FilterTitlesAction implements Action {
  type = TitleActionTypes.FILTER_TITLES;

  constructor(public payload: string) { }
}

export class SelectTitleAction implements Action {
  type = TitleActionTypes.SELECT_TITLE;

  constructor(public payload: ITitleState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TitleActions
  = InitializeTitlesAction
  | InitializeTitlesActionInternal
  | TitlesInitializedAction
  | InitializeTitlesActionFailed
  | CreateTitleAction
  | CreateTitleActionInternal
  | TitleAddedAction
  | CreateTitleActionFailed
  | DestroyTitleAction
  | DestroyTitleActionInternal
  | TitleDestroyedAction
  | DestroyTitleActionFailed
  | UpdateTitleAction
  | UpdateTitleActionInternal
  | TitleUpdatedAction
  | UpdateTitleActionFailed
  | FilterTitlesAction
  | SelectTitleAction;
