import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/dog.action';
import { Action } from '@ngrx/store';

export function dogFilterReducer(
    state: string = '',
    action: actions.FilterDogsAction
): string {
  switch (action.type) {
    case actions.DogActionTypes.FILTER_DOGS:
      return action.payload;
    
    default:
      return state;
  }

}
