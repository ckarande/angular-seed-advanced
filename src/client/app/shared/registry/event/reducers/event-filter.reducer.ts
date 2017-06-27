import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/event.action';
import { Action } from '@ngrx/store';

export function eventFilterReducer(
    state: string = '',
    action: actions.FilterEventsAction
): string {
  switch (action.type) {
    case actions.EventActionTypes.FILTER_EVENTS:
      return action.payload;
    
    default:
      return state;
  }

}
