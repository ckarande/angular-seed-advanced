import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../states/index';
import { IDogManager } from '../dog/states/index';
import { combineReducers } from '@ngrx/store';
import { dogManagerReducer, dogFilterReducer } from '../dog/reducers/index';
import { getDogList, __getSelectedDog } from '../dog/reducers/index';
import { compose } from '@ngrx/core/compose';

export const registryReducer = combineReducers({
    dogManager: dogManagerReducer,
    filter: dogFilterReducer
});

export function getDogManager(stream: Observable<IRegistryState>): Observable<IDogManager> {return stream.select(registryInstance => registryInstance.dogManager);}

export function getDogFilter(stream: Observable<IRegistryState>): Observable<string> {return stream.select(registryInstance => registryInstance.filter);}

export const _getSelectedDog = compose(__getSelectedDog, getDogManager);

export const getDogs = compose(getDogList, getDogManager);

