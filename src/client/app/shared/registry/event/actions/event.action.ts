import { Action } from '@ngrx/store';
import { type } from '../../../core/utils/type';
import { CATEGORY } from '../common/category.common';
import { IEventState } from '../states/index';
import * as SailsResponses from '../../common/states/sailsResponses';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IEventActions {
  INITIALIZE_EVENTS: string;
  _INITIALIZE_EVENTS: string;
  EVENTS_INITIALIZED: string;
  INITIALIZE_EVENTS_FAILED: string;

  CREATE_EVENT: string;
  _CREATE_EVENT: string;
  EVENT_CREATED: string;
  CREATE_EVENT_FAILED: string;

  DESTROY_EVENT: string;
  _DESTROY_EVENT: string;
  EVENT_DESTROYED: string;
  DESTROY_EVENT_FAILED: string;

  UPDATE_EVENT: string;
  _UPDATE_EVENT: string;
  EVENT_UPDATED: string;
  UPDATE_EVENT_FAILED: string;

  FILTER_EVENTS: string;
  SELECT_EVENT: string;
}

export const EventActionTypes: IEventActions = {
  INITIALIZE_EVENTS:          type(`${CATEGORY} Initialize Events`),
  _INITIALIZE_EVENTS:         type(`${CATEGORY} Initialize Events (internal)`),
  EVENTS_INITIALIZED:         type(`${CATEGORY} Initialized Events`),
  INITIALIZE_EVENTS_FAILED:   type(`${CATEGORY} Initialize Events Failed`),

  CREATE_EVENT:               type(`${CATEGORY} Add Event`),
  _CREATE_EVENT:              type(`${CATEGORY} Add Event (internal)`),
  EVENT_CREATED:              type(`${CATEGORY} Event Added`),
  CREATE_EVENT_FAILED:        type(`${CATEGORY} Add Event Failed`),

  DESTROY_EVENT:              type(`${CATEGORY} Destroy Event`),
  _DESTROY_EVENT:             type(`${CATEGORY} Destroy Event (internal)`),
  EVENT_DESTROYED:            type(`${CATEGORY} Event Destroyed`),
  DESTROY_EVENT_FAILED:       type(`${CATEGORY} Destroy Event Failed`),

  UPDATE_EVENT:               type(`${CATEGORY} Update Event`),
  _UPDATE_EVENT:              type(`${CATEGORY} Update Event (internal)`),
  EVENT_UPDATED:              type(`${CATEGORY} Event Updated`),
  UPDATE_EVENT_FAILED:        type(`${CATEGORY} Update Event Failed`),

  FILTER_EVENTS:              type(`${CATEGORY} Filter Events`),
  SELECT_EVENT:               type(`${CATEGORY} Select Event`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitializeEventsAction implements Action {
  type = EventActionTypes.INITIALIZE_EVENTS;
  payload = null;
}

export class InitializeEventsActionInternal implements Action {
  type = EventActionTypes._INITIALIZE_EVENTS;

  constructor(public payload: Array<IEventState>) { }
}

export class EventsInitializedAction implements Action {
  type = EventActionTypes.EVENTS_INITIALIZED;

  constructor(public payload: Array<IEventState>) { }
}

export class InitializeEventsActionFailed implements Action {
  type = EventActionTypes.INITIALIZE_EVENTS_FAILED;

  constructor(public payload: any) { }
}

export class CreateEventAction implements Action {
  type: string = EventActionTypes.CREATE_EVENT;
  payload: IEventState;

  constructor( message: SailsResponses.SailsPublishCreateMessage<IEventState>) { 
    this.payload = message.data;
  }
}

export class CreateEventActionInternal implements Action {
  type = EventActionTypes._CREATE_EVENT;

  constructor(public payload: IEventState) { }
}

export class EventAddedAction implements Action {
  type = EventActionTypes.EVENT_CREATED;

  constructor(public payload: IEventState) { }
}

export class CreateEventActionFailed implements Action {
  type = EventActionTypes.CREATE_EVENT_FAILED;

  constructor(public payload: IEventState) { }
}

export class DestroyEventAction implements Action {
  type = EventActionTypes.DESTROY_EVENT;

  constructor(public payload: IEventState) { }
}

export class DestroyEventActionInternal implements Action {
  type = EventActionTypes._DESTROY_EVENT;

  constructor(public payload: IEventState) { }
}

export class EventDestroyedAction implements Action {
  type = EventActionTypes.EVENT_DESTROYED;

  constructor(public payload: IEventState) { }
}

export class DestroyEventActionFailed implements Action {
  type = EventActionTypes.DESTROY_EVENT_FAILED;

  constructor(public payload: IEventState) { }
}

export class UpdateEventAction implements Action {
  type = EventActionTypes.UPDATE_EVENT;

  constructor(public payload: IEventState) { }
}

export class UpdateEventActionInternal implements Action {
  type = EventActionTypes._UPDATE_EVENT;

  constructor(public payload: IEventState) { }
}

export class EventUpdatedAction implements Action {
  type = EventActionTypes.EVENT_UPDATED;

  constructor(public payload: IEventState) { }
}

export class UpdateEventActionFailed implements Action {
  type = EventActionTypes.UPDATE_EVENT_FAILED;

  constructor(public payload: IEventState) { }
}

export class FilterEventsAction implements Action {
  type = EventActionTypes.FILTER_EVENTS;

  constructor(public payload: string) { }
}

export class SelectEventAction implements Action {
  type = EventActionTypes.SELECT_EVENT;

  constructor(public payload: IEventState) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type EventActions
  = InitializeEventsAction
  | InitializeEventsActionInternal
  | EventsInitializedAction
  | InitializeEventsActionFailed
  | CreateEventAction
  | CreateEventActionInternal
  | EventAddedAction
  | CreateEventActionFailed
  | DestroyEventAction
  | DestroyEventActionInternal
  | EventDestroyedAction
  | DestroyEventActionFailed
  | UpdateEventAction
  | UpdateEventActionInternal
  | EventUpdatedAction
  | UpdateEventActionFailed
  | FilterEventsAction
  | SelectEventAction;
