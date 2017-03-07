// libs
import { Registry, Model } from 'ngrx-registry';

// module
type ISampleState = Model.sample.IAppState;
const initialState = Registry.objects.sample.initialState;
type Actions = Model.sample.Actions;
const actions = Registry.actions.sample;

export function reducer(
    state: ISampleState = initialState,
    action: Actions
): ISampleState {
  switch (action.type) {
    case actions.TYPES.INITIALIZED:
      return (<any>Object).assign({}, state, {
        names: action.payload
      });

    case actions.TYPES.NAME_ADDED:
      return (<any>Object).assign({}, state, {
        names: [...state.names, action.payload]
      });

    default:
      return state;
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IReducerRegistry {
        'sample': (state: ISampleState, action: Actions) => ISampleState;
      }
    }
  }
}

Registry.reducers.sample.sample = reducer;
