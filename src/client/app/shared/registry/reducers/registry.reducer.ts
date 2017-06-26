import { Observable } from 'rxjs/Observable';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { IRegistryState } from '../states/index';

import { IDogManager } from '../dog/states/index';
import { dogManagerReducer, dogFilterReducer } from '../dog/reducers/index';
import { __getDogList, __getSelectedDog } from '../dog/reducers/index';

import { IOrganizationManager } from '../organization/states/index';
import { organizationManagerReducer, organizationFilterReducer } from '../organization/reducers/index';
import { __getOrganizationList, __getSelectedOrganization } from '../organization/reducers/index';

import { ITitleCategoryManager } from '../titlecategory/states/index';
import { titleCategoryManagerReducer, titleCategoryFilterReducer } from '../titlecategory/reducers/index';
import { __getTitleCategoryList, __getSelectedTitleCategory } from '../titlecategory/reducers/index';

import { ITitleManager } from '../title/states/index';
import { titleManagerReducer, titleFilterReducer } from '../title/reducers/index';
import { __getTitleList, __getSelectedTitle } from '../title/reducers/index';

import { IBreedManager } from '../breed/states/index';
import { breedManagerReducer, breedFilterReducer } from '../breed/reducers/index';
import { __getBreedList, __getSelectedBreed } from '../breed/reducers/index';

import { IBreedGroupManager } from '../breedgroup/states/index';
import { breedGroupManagerReducer, breedGroupFilterReducer } from '../breedGroup/reducers/index';
import { __getBreedGroupList, __getSelectedBreedGroup } from '../breedGroup/reducers/index';

import { IMemberClubManager } from '../memberClub/states/index';
import { memberClubManagerReducer, memberClubFilterReducer } from '../memberClub/reducers/index';
import { __getMemberClubList, __getSelectedMemberClub } from '../memberClub/reducers/index';

export const registryReducer = combineReducers({
    dogManager: dogManagerReducer,
    dogFilter: dogFilterReducer
});

export function getDogManager(stream: Observable<IRegistryState>): Observable<IDogManager> {return stream.select(registryInstance => registryInstance.dogManager);}

export function getDogFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.dogFilter);}

export const _getSelectedDog = compose(__getSelectedDog, getDogManager);

export const _getDogList = compose(__getDogList, getDogManager);



export function getOrganizationManager(stream: Observable<IRegistryState>): Observable<IOrganizationManager> {return stream.select(registryInstance => registryInstance.organizationManager);}

export function getOrganizationFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.organizationFilter);}

export const _getSelectedOrganization = compose(__getSelectedOrganization, getOrganizationManager);

export const _getOrganizationList = compose(__getOrganizationList, getOrganizationManager);


export function getTitleCategoryManager(stream: Observable<IRegistryState>): Observable<ITitleCategoryManager> {return stream.select(registryInstance => registryInstance.titleCategoryManager);}

export function getTitleCategoryFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.titleCategoryFilter);}

export const _getSelectedTitleCategory = compose(__getSelectedTitleCategory, getTitleCategoryManager);

export const _getTitleCategoryList = compose(__getTitleCategoryList, getTitleCategoryManager);


export function getTitleManager(stream: Observable<IRegistryState>): Observable<ITitleManager> {return stream.select(registryInstance => registryInstance.titleManager);}

export function getTitleFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.titleFilter);}

export const _getSelectedTitle = compose(__getSelectedTitle, getTitleManager);

export const _getTitleList = compose(__getTitleList, getTitleManager);


export function getBreedManager(stream: Observable<IRegistryState>): Observable<IBreedManager> {return stream.select(registryInstance => registryInstance.breedManager);}

export function getBreedFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.breedFilter);}

export const _getSelectedBreed = compose(__getSelectedBreed, getBreedManager);

export const _getBreedList = compose(__getBreedList, getBreedManager);


export function getBreedGroupManager(stream: Observable<IRegistryState>): Observable<IBreedGroupManager> {return stream.select(registryInstance => registryInstance.breedGroupManager);}

export function getBreedGroupFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.breedGroupFilter);}

export const _getSelectedBreedGroup = compose(__getSelectedBreedGroup, getBreedGroupManager);

export const _getBreedGroupList = compose(__getBreedGroupList, getBreedGroupManager);


export function getMemberClubManager(stream: Observable<IRegistryState>): Observable<IMemberClubManager> {return stream.select(registryInstance => registryInstance.memberClubManager);}

export function getMemberClubFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.memberClubFilter);}

export const _getSelectedMemberClub = compose(__getSelectedMemberClub, getMemberClubManager);

export const _getMemberClubList = compose(__getMemberClubList, getMemberClubManager);
