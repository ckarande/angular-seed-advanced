import { Model, Registry } from 'ngrx-registry';

type State = Model.i18n.IAppState;

export function reducer(
    state: State = Registry.objects.i18n.inititalState,
    action: Model.i18n.Actions
): State {
  switch (action.type) {
    case Registry.actions.i18n.TYPES.LANG_CHANGED:
      if (state.lang !== action.payload)
        return (<any>Object).assign({}, state, {
            lang: action.payload
          });

      return state;
    default:
      return state;
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IReducerRegistry {
        i18n: (state: State, action: Model.i18n.Actions) => State;
      }
    }
  }
}

Registry.reducers.i18n.i18n = reducer;
