import { Observable } from 'rxjs/Observable';
import { IEntityManager, EntityManager } from '../common/states/index';
import * as Dogs from '../dog/states/index';
import { createSelector } from 'reselect';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export { IDogState } from '../dog/states/index';

export interface IRegistryState {
  dogs: Array<Dogs.IDogState>;
  dogManager: IEntityManager<Dogs.IDogState>;
}

export const initialState: IRegistryState = {
  dogs: <Array<Dogs.IDogState>>[],
  dogManager: Dogs.dogsInitialState
};
