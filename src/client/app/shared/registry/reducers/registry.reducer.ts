import { Observable } from 'rxjs/Observable';

import { Registry, Model, queryRegistryUtils, compose } from 'ngrx-registry';

import { combineReducers } from '@ngrx/store';

export const registryReducer = combineReducers({
    dogManager: Registry.reducers.registry.dog.dogManager
});

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export interface IReducerRegistry {
                registry: (state: Model.registry.IAppState, action: Model.registry.Actions) => Model.registry.IAppState;
            }

            export interface IQueryRegistry {
                dogManager: (stream: Observable<Model.registry.IAppState>) => Observable<Model.registry.dog.IDogManager>;
            }
        }
    }
}

Registry.reducers.registry.registry = registryReducer;
Registry.queries.registry.dogManager = queryRegistryUtils._createQuery(Registry.classes.registry.AppState, 'dogManager');
