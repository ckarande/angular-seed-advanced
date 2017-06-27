import { Observable } from 'rxjs/Observable';
import { IBreedGroupManager, BreedGroupManager, IBreedGroupState, breedGroupsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/breedGroup.action';
import { Action } from '@ngrx/store';

export function breedGroupManagerReducer(
    state: IBreedGroupManager = new BreedGroupManager(),
    action: actions.BreedGroupActions
): IBreedGroupManager {
  switch (action.type) {
    case actions.BreedGroupActionTypes._INITIALIZE_BREEDGROUPS:
      return state.updateList(action.payload);
    
    case actions.BreedGroupActionTypes._CREATE_BREEDGROUP:
      return state.create(action.payload);

    case actions.BreedGroupActionTypes._DESTROY_BREEDGROUP:
      return state.destroy(action.payload);

    case actions.BreedGroupActionTypes._UPDATE_BREEDGROUP:
      return state.update(action.payload);

    case actions.BreedGroupActionTypes.SELECT_BREEDGROUP:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getBreedGroupList (stream:Observable<IBreedGroupManager>) : Observable<Array<IBreedGroupState>> {
  return stream.select((breedGroupManagerInstance) => breedGroupManagerInstance.list); 
};

export function __getSelectedBreedGroup (stream:Observable<IBreedGroupManager>) : Observable<IBreedGroupState> {
  return stream.select((breedGroupManagerInstance) => breedGroupManagerInstance.selected); 
};
