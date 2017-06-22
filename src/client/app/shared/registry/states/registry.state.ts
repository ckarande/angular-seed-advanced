import { Observable } from 'rxjs/Observable';
import { IEntityManager, EntityManager } from '../common/states/index';
import * as Dogs from '../dog/states/index';
import * as Organizations from '../organization/states/index';
import * as TitleCategories from '../titlecategory/states/index';
import * as Titles from '../title/states/index';
import { createSelector } from 'reselect';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export { IDogState } from '../dog/states/index';

export interface IRegistryState {
  dogManager: IEntityManager<Dogs.IDogState>;
  dogFilter: string;

  organizationManager: IEntityManager<Organizations.IOrganizationState>;
  organizationFilter: string;

  titleCategoryManager: IEntityManager<TitleCategories.ITitleCategoryState>;
  titleCategoryFilter: string;

  titleManager: IEntityManager<Titles.ITitleState>;
  titleFilter: string;
}

export const initialState: IRegistryState = {
  dogManager: Dogs.dogsInitialState,
  dogFilter: '',

  organizationManager: Organizations.organizationsInitialState,
  organizationFilter: '',

  titleCategoryManager: TitleCategories.titleCategoriesInitialState,
  titleCategoryFilter: '',

  titleManager: Titles.titlesInitialState,
  titleFilter: ''

};
