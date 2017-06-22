import { Observable } from 'rxjs/Observable';
import { ITitleCategoryManager, TitleCategoryManager, ITitleCategoryState, titleCategoriesInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/titlecategory.action';
import { Action } from '@ngrx/store';

export function titleCategoryManagerReducer(
    state: ITitleCategoryManager = new TitleCategoryManager(),
    action: actions.TitleCategoryActions
): ITitleCategoryManager {
  switch (action.type) {
    case actions.TitleCategoryActionTypes._INITIALIZE_TITLECATEGORIES:
      return state.updateList(action.payload);
    
    case actions.TitleCategoryActionTypes._CREATE_TITLECATEGORY:
      return state.create(action.payload);

    case actions.TitleCategoryActionTypes._DESTROY_TITLECATEGORY:
      return state.destroy(action.payload);

    case actions.TitleCategoryActionTypes._UPDATE_TITLECATEGORY:
      return state.update(action.payload);

    case actions.TitleCategoryActionTypes.SELECT_TITLECATEGORY:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getTitleCategoryList (stream:Observable<ITitleCategoryManager>) : Observable<Array<ITitleCategoryState>> {
  return stream.select((titleCategoryManagerInstance) => titleCategoryManagerInstance.list); 
};

export function __getSelectedTitleCategory (stream:Observable<ITitleCategoryManager>) : Observable<ITitleCategoryState> {
  return stream.select((titleCategoryManagerInstance) => titleCategoryManagerInstance.selected); 
};
