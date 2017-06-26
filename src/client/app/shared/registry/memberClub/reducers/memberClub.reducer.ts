import { Observable } from 'rxjs/Observable';
import { IMemberClubManager, MemberClubManager, IMemberClubState, memberClubsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/memberClub.action';
import { Action } from '@ngrx/store';

export function memberClubManagerReducer(
    state: IMemberClubManager = new MemberClubManager(),
    action: actions.MemberClubActions
): IMemberClubManager {
  switch (action.type) {
    case actions.MemberClubActionTypes._INITIALIZE_MEMBERCLUBS:
      return state.updateList(action.payload);
    
    case actions.MemberClubActionTypes._CREATE_MEMBERCLUB:
      return state.create(action.payload);

    case actions.MemberClubActionTypes._DESTROY_MEMBERCLUB:
      return state.destroy(action.payload);

    case actions.MemberClubActionTypes._UPDATE_MEMBERCLUB:
      return state.update(action.payload);

    case actions.MemberClubActionTypes.SELECT_MEMBERCLUB:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getMemberClubList (stream:Observable<IMemberClubManager>) : Observable<Array<IMemberClubState>> {
  return stream.select((memberClubManagerInstance) => memberClubManagerInstance.list); 
};

export function __getSelectedMemberClub (stream:Observable<IMemberClubManager>) : Observable<IMemberClubState> {
  return stream.select((memberClubManagerInstance) => memberClubManagerInstance.selected); 
};
