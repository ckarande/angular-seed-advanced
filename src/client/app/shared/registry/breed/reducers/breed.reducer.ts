import { Observable } from 'rxjs/Observable';
import { IBreedManager, BreedManager, IBreedState, breedsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/breed.action';
import { Action } from '@ngrx/store';

export function breedManagerReducer(
    state: IBreedManager = new BreedManager(),
    action: actions.BreedActions
): IBreedManager {
  switch (action.type) {
    case actions.BreedActionTypes._INITIALIZE_BREEDS:
      return state.updateList(action.payload);
    
    case actions.BreedActionTypes._CREATE_BREED:
      return state.create(action.payload);

    case actions.BreedActionTypes._DESTROY_BREED:
      return state.destroy(action.payload);

    case actions.BreedActionTypes._UPDATE_BREED:
      return state.update(action.payload);

    case actions.BreedActionTypes.SELECT_BREED:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getBreedList (stream:Observable<IBreedManager>) : Observable<Array<IBreedState>> {
  return stream.select((breedManagerInstance) => breedManagerInstance.list); 
};

export function __getSelectedBreed (stream:Observable<IBreedManager>) : Observable<IBreedState> {
  return stream.select((breedManagerInstance) => breedManagerInstance.selected); 
};
