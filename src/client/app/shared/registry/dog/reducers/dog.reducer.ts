import { Observable } from 'rxjs/Observable';
import { IDogManager, DogManager, IDogState, dogsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/dog.action';
import { Action } from '@ngrx/store';

export function dogManagerReducer(
    state: IDogManager = new DogManager(),
    action: actions.DogActions
): IDogManager {
  switch (action.type) {
    case actions.DogActionTypes._INITIALIZE_DOGS:
      return state.updateList(action.payload);
    
    case actions.DogActionTypes._CREATE_DOG:
      return state.add(action.payload);

    case actions.DogActionTypes._DESTROY_DOG:
      return state.destroy(action.payload);

    case actions.DogActionTypes._UPDATE_DOG:
      return state.update(action.payload);

    default:
      return state;
  }

}

export function getDogList (s:Observable<IDogManager>) : Observable<Array<IDogState>> {
  return s.select((s) => s.list); 
};
