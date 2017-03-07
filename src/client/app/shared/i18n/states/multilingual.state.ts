import { Observable } from 'rxjs/Observable';
import { Model, Registry, queryRegistryUtils } from 'ngrx-registry';

type AppState = Model.i18n.IAppState;

declare module 'ngrx-registry' {
  export namespace Model {

    export namespace i18n {

      export interface IAppState {
        lang: string;
      }

      export interface IClassRegistry {
        State: typeof State;
      }

      export interface IObjectRegistry {
        inititalState: Model.i18n.IAppState;
      }

      export interface IQueryRegistry {
        selectedLanguage: (stream: Observable<AppState>) => Observable<string>;
      }

    }
  }
}

export class State implements AppState {
  lang: string;
  constructor(lang?: string) {
    this.lang = lang;
  }
}

Registry.objects.i18n.inititalState = new State('en');
Registry.state.i18n = new State('en');
Registry.queries.i18n.selectedLanguage = queryRegistryUtils._createQuery(State, 'lang');
