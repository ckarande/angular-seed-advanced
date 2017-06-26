import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/titleCategory.action';
import { Action } from '@ngrx/store';

export function titleCategoryFilterReducer(
    state: string = '',
    action: actions.FilterTitleCategoriesAction
): string {
  switch (action.type) {
    case actions.TitleCategoryActionTypes.FILTER_TITLECATEGORIES:
      return action.payload;
    
    default:
      return state;
  }

}
