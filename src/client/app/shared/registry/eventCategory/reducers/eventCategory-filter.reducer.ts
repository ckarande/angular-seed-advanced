import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/eventCategory.action';
import { Action } from '@ngrx/store';

export function eventCategoryFilterReducer(
    state: string = '',
    action: actions.FilterEventCategoriesAction
): string {
  switch (action.type) {
    case actions.EventCategoryActionTypes.FILTER_EVENTCATEGORIES:
      return action.payload;
    
    default:
      return state;
  }

}
