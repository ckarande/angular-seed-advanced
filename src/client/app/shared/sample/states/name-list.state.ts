// libs
import { Observable } from 'rxjs/Observable';
import { Registry, Model, queryRegistryUtils } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IAppState {
        names: Array<string>;
      }
    }
  }
}

export class SampleState implements Model.sample.IAppState {
  public names: Array<string> = [];
  constructor(names?: Array<string>) {
    this.names = names;
  };
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IClassRegistry {
        AppState: typeof SampleState;
      }

      export interface IObjectRegistry {
        initialState: IAppState;
      }

      export interface IQueryRegistry {
        names: (state$: Observable<Model.sample.IAppState>) => Observable<Array<string>>;
      }
    }
  }
}

Registry.classes.sample.AppState = SampleState;
Registry.objects.sample.initialState = new SampleState();
Registry.state.sample = Registry.objects.sample.initialState;
Registry.queries.sample.names = queryRegistryUtils._createQuery(SampleState, 'names');
