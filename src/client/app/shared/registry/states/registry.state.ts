import { Observable } from 'rxjs/Observable';
import { IEntityManager, EntityManager } from '../common/states/index';
import * as Dogs from '../dog/states/index';
import * as Organizations from '../organization/states/index';
import * as Titles from '../title/states/index';
import * as TitleCategories from '../titleCategory/states/index';
import * as Events from '../event/states/index';
import * as EventCategories from '../eventCategory/states/index';
import * as Breeds from '../breed/states/index';
import * as BreedGroups from '../breedGroup/states/index';
import * as MemberClubs from '../memberClub/states/index';
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

  eventCategoryManager: IEntityManager<EventCategories.IEventCategoryState>;
  eventCategoryFilter: string;

  eventManager: IEntityManager<Events.IEventState>;
  eventFilter: string;

  breedManager: IEntityManager<Breeds.IBreedState>;
  breedFilter: string;

  breedGroupManager: IEntityManager<BreedGroups.IBreedGroupState>;
  breedGroupFilter: string;

  memberClubManager: IEntityManager<MemberClubs.IMemberClubState>;
  memberClubFilter: string;
}

export const initialState: IRegistryState = {
  dogManager: Dogs.dogsInitialState,
  dogFilter: '',

  organizationManager: Organizations.organizationsInitialState,
  organizationFilter: '',

  titleCategoryManager: TitleCategories.titleCategoriesInitialState,
  titleCategoryFilter: '',

  titleManager: Titles.titlesInitialState,
  titleFilter: '',

  eventCategoryManager: EventCategories.eventCategoriesInitialState,
  eventCategoryFilter: '',

  eventManager: Events.eventsInitialState,
  eventFilter: '',

  breedManager: Breeds.breedsInitialState,
  breedFilter: '',

  breedGroupManager: BreedGroups.breedGroupsInitialState,
  breedGroupFilter: '',

  memberClubManager: MemberClubs.memberClubsInitialState,
  memberClubFilter: ''
};
