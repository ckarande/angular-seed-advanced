// libs
import { Observable } from 'rxjs/Observable';
// import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromMultilingual from '../../i18n/index';
import * as fromSample from '../../sample/index';
import * as fromRegistry from '../../registry/index';
import { Model, Registry, queryRegistryUtils } from 'ngrx-registry';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace global {
      export interface IReducerRegistry {
        //'i18n': (state: Model.i18n.IAppState) => Model.i18n.IAppState;
        'registry': (state: Model.registry.IAppState) => Model.registry.IAppState;
        //'sample': (state: Model.sample.IAppState) => Model.sample.IAppState;
      }
    }
  }
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  i18n: Registry.reducers.i18n.i18n,
  registry: Registry.reducers.registry.registry,
  sample: Registry.reducers.sample.sample
};

const developmentReducer: ActionReducer<Model.IAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<Model.IAppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
  if (String('<%= BUILD_TYPE %>') === 'dev') {
    return developmentReducer(state, action);
  } else {
    return productionReducer(state, action);
  }
}

class AppState implements Model.IAppState {
  i18n: Model.i18n.IAppState;
  registry: Model.registry.IAppState;
  sample: Model.sample.IAppState;
}

const getMultilingualState = queryRegistryUtils._createQuery(AppState, 'i18n');
const getRegistryState = queryRegistryUtils._createQuery(AppState, 'registry');
const getSampleState = queryRegistryUtils._createQuery(AppState, 'sample');

const getLang = compose(Registry.queries.i18n.selectedLanguage, getMultilingualState);
const getDogs = compose(Registry.queries.registry.dog.dogManagerList, Registry.queries.registry.dogManager, getRegistryState);
const getNames = compose(Registry.queries.sample.names, getSampleState);

const globalQueries = {
  getLang: getLang,
  getDogs: getDogs,
  getNames: getNames
};

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace global {
      export interface IQueryRegistry {
        getLang: (stream: Observable<Model.IAppState>) => Observable<string>;
        getDogs: (stream: Observable<Model.IAppState>) => Observable<Array<Model.registry.dog.IDogState>>;
        getNames: (stream: Observable<Model.IAppState>) => Observable<Array<string>>;
      }

      export interface IReducerRegistry {
        AppReducer: (state: Model.IAppState, action: any) => Model.IAppState;
      }

    }
  }
}

Registry.global.reducers.AppReducer = AppReducer;
Object.assign(Registry.global.queries, globalQueries);
