import { Observable } from 'rxjs/Observable';
import { IEntityManager, EntityManager } from '../common/states/index';
import * as Dogs from '../dog/states/index';
import { createSelector } from 'reselect';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export { IDogState } from '../dog/states/index';

export interface IRegistryState {
  dogManager: IEntityManager<Dogs.IDogState>;
  filter: string;
}

export const initialState: IRegistryState = {
  dogManager: Dogs.dogsInitialState,
  filter: ''
};
