import { Observable } from 'rxjs/Observable';
import { IRegistryState } from '../states/index';
import { IDogManager } from '../dog/states/index';
import { combineReducers } from '@ngrx/store';
import { dogManagerReducer } from '../dog/reducers/dog.reducer';
import { getDogList } from '../dog/reducers/dog.reducer';
import { compose } from '@ngrx/core/compose';

export const registryReducer = combineReducers({
    dogManager: dogManagerReducer
});

export function getDogManager(stream: Observable<IRegistryState>): Observable<IDogManager> {return stream.select(registryInstance => registryInstance.dogManager);}

export const getDogs = compose(getDogList, getDogManager);
