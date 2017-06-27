import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/breed.action';
import { Action } from '@ngrx/store';

export function breedFilterReducer(
    state: string = '',
    action: actions.FilterBreedsAction
): string {
  switch (action.type) {
    case actions.BreedActionTypes.FILTER_BREEDS:
      return action.payload;
    
    default:
      return state;
  }

}
