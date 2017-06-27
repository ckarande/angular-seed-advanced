import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/breedGroup.action';
import { Action } from '@ngrx/store';

export function breedGroupFilterReducer(
    state: string = '',
    action: actions.FilterBreedGroupsAction
): string {
  switch (action.type) {
    case actions.BreedGroupActionTypes.FILTER_BREEDGROUPS:
      return action.payload;
    
    default:
      return state;
  }

}
