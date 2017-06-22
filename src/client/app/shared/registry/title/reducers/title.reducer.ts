import { Observable } from 'rxjs/Observable';
import { ITitleManager, TitleManager, ITitleState, titlesInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/title.action';
import { Action } from '@ngrx/store';

export function titleManagerReducer(
    state: ITitleManager = new TitleManager(),
    action: actions.TitleActions
): ITitleManager {
  switch (action.type) {
    case actions.TitleActionTypes._INITIALIZE_TITLES:
      return state.updateList(action.payload);
    
    case actions.TitleActionTypes._CREATE_TITLE:
      return state.create(action.payload);

    case actions.TitleActionTypes._DESTROY_TITLE:
      return state.destroy(action.payload);

    case actions.TitleActionTypes._UPDATE_TITLE:
      return state.update(action.payload);

    case actions.TitleActionTypes.SELECT_TITLE:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getTitleList (stream:Observable<ITitleManager>) : Observable<Array<ITitleState>> {
  return stream.select((titleManagerInstance) => titleManagerInstance.list); 
};

export function __getSelectedTitle (stream:Observable<ITitleManager>) : Observable<ITitleState> {
  return stream.select((titleManagerInstance) => titleManagerInstance.selected); 
};
