import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {

      interface IAppState {
        dogManager: Model.registry.dog.IDogManager;
      }

      interface IObjectRegistry {
        initialRegistryState: Model.registry.IAppState;
      }
    }
  }
}

class AppState implements Model.registry.IAppState {
  dogManager: Model.registry.dog.IDogManager;

  constructor() {
    this.dogManager = Registry.objects.registry.dog.initialDogManagerState;
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      interface IClassRegistry {
        AppState: typeof AppState;
      }
    }
  }
}

export function initializeRegistry() {
  Registry.classes.registry.AppState = AppState;
  Registry.objects.registry.initialRegistryState = new AppState();
  Registry.state.registry = Registry.objects.registry.initialRegistryState;
}
