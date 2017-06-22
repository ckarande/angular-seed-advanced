import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../../states/registry.state';
import * as actions from '../actions/organization.action';
import { Action } from '@ngrx/store';

export function organizationFilterReducer(
    state: string = '',
    action: actions.FilterOrganizationsAction
): string {
  switch (action.type) {
    case actions.OrganizationActionTypes.FILTER_ORGANIZATIONS:
      return action.payload;
    
    default:
      return state;
  }

}
