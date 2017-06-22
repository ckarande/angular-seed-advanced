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

