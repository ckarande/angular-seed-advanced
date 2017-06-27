import { Observable } from 'rxjs/Observable';
import { IOrganizationManager, OrganizationManager, IOrganizationState, organizationsInitialState } from '../states/index';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/organization.action';
import { Action } from '@ngrx/store';

export function organizationManagerReducer(
    state: IOrganizationManager = new OrganizationManager(),
    action: actions.OrganizationActions
): IOrganizationManager {
  switch (action.type) {
    case actions.OrganizationActionTypes._INITIALIZE_ORGANIZATIONS:
      return state.updateList(action.payload);
    
    case actions.OrganizationActionTypes._CREATE_ORGANIZATION:
      return state.create(action.payload);

    case actions.OrganizationActionTypes._DESTROY_ORGANIZATION:
      return state.destroy(action.payload);

    case actions.OrganizationActionTypes._UPDATE_ORGANIZATION:
      return state.update(action.payload);

    case actions.OrganizationActionTypes.SELECT_ORGANIZATION:
    console.log('got event: ', action.payload);
      return state.updateSelected(action.payload);  

    default:
      return state;
  }

}

export function __getOrganizationList (stream:Observable<IOrganizationManager>) : Observable<Array<IOrganizationState>> {
  return stream.select((organizationManagerInstance) => organizationManagerInstance.list); 
};

export function __getSelectedOrganization (stream:Observable<IOrganizationManager>) : Observable<IOrganizationState> {
  return stream.select((organizationManagerInstance) => organizationManagerInstance.selected); 
};
