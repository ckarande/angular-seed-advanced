import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/title.action';
import { Action } from '@ngrx/store';

export function titleFilterReducer(
    state: string = '',
    action: actions.FilterTitlesAction
): string {
  switch (action.type) {
    case actions.TitleActionTypes.FILTER_TITLES:
      return action.payload;
    
    default:
      return state;
  }

}
