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

    case actions.DogActionTypes.SELECT_DOG:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function getDogList (stream:Observable<IDogManager>) : Observable<Array<IDogState>> {
  return stream.select((dogManagerInstance) => dogManagerInstance.list); 
};

export function __getSelectedDog (stream:Observable<IDogManager>) : Observable<IDogState> {
  return stream.select((dogManagerInstance) => dogManagerInstance.selected); 
};
