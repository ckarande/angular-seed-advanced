import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/memberClub.action';
import { Action } from '@ngrx/store';

export function memberClubFilterReducer(
    state: string = '',
    action: actions.FilterMemberClubsAction
): string {
  switch (action.type) {
    case actions.MemberClubActionTypes.FILTER_MEMBERCLUBS:
      return action.payload;
    
    default:
      return state;
  }

}
