import { Observable } from 'rxjs/Observable';
import { IEventManager, EventManager, IEventState, eventsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/event.action';
import { Action } from '@ngrx/store';

export function eventManagerReducer(
    state: IEventManager = new EventManager(),
    action: actions.EventActions
): IEventManager {
  switch (action.type) {
    case actions.EventActionTypes._INITIALIZE_EVENTS:
      return state.updateList(action.payload);
    
    case actions.EventActionTypes._CREATE_EVENT:
      return state.create(action.payload);

    case actions.EventActionTypes._DESTROY_EVENT:
      return state.destroy(action.payload);

    case actions.EventActionTypes._UPDATE_EVENT:
      return state.update(action.payload);

    case actions.EventActionTypes.SELECT_EVENT:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getEventList (stream:Observable<IEventManager>) : Observable<Array<IEventState>> {
  return stream.select((eventManagerInstance) => eventManagerInstance.list); 
};

export function __getSelectedEvent (stream:Observable<IEventManager>) : Observable<IEventState> {
  return stream.select((eventManagerInstance) => eventManagerInstance.selected); 
};
