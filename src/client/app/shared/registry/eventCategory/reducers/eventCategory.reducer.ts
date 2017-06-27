import { Observable } from 'rxjs/Observable';
import { IEventCategoryManager, EventCategoryManager, IEventCategoryState, eventCategoriesInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/eventCategory.action';
import { Action } from '@ngrx/store';

export function eventCategoryManagerReducer(
    state: IEventCategoryManager = new EventCategoryManager(),
    action: actions.EventCategoryActions
): IEventCategoryManager {
  switch (action.type) {
    case actions.EventCategoryActionTypes._INITIALIZE_EVENTCATEGORIES:
      return state.updateList(action.payload);
    
    case actions.EventCategoryActionTypes._CREATE_EVENTCATEGORY:
      return state.create(action.payload);

    case actions.EventCategoryActionTypes._DESTROY_EVENTCATEGORY:
      return state.destroy(action.payload);

    case actions.EventCategoryActionTypes._UPDATE_EVENTCATEGORY:
      return state.update(action.payload);

    case actions.EventCategoryActionTypes.SELECT_EVENTCATEGORY:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getEventCategoryList (stream:Observable<IEventCategoryManager>) : Observable<Array<IEventCategoryState>> {
  return stream.select((eventCategoryManagerInstance) => eventCategoryManagerInstance.list); 
};

export function __getSelectedEventCategory (stream:Observable<IEventCategoryManager>) : Observable<IEventCategoryState> {
  return stream.select((eventCategoryManagerInstance) => eventCategoryManagerInstance.selected); 
};
