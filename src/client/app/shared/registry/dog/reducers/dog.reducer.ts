import { Observable } from 'rxjs/Observable';
import { Model, Registry, queryRegistryUtils } from 'ngrx-registry';

const DogActionTypes = Registry.actions.registry.dog.TYPES;
const DogClasses = Registry.classes.registry.dog;
type IDogManager = Model.registry.dog.IDogManager;
type IDogState = Model.registry.dog.IDogState;
type Actions = Model.registry.dog.Actions;

export function dogManagerReducer(
    state: IDogManager = new DogClasses.DogManager(),
    action: Actions
): IDogManager {
  switch (action.type) {
    case DogActionTypes._INITIALIZE_DOGS:
      return state.updateList(action.payload);
    
    case DogActionTypes._CREATE_DOG:
      return state.add(action.payload);

    case DogActionTypes._DESTROY_DOG:
      return state.destroy(action.payload);

    case DogActionTypes._UPDATE_DOG:
      return state.update(action.payload);

    default:
      return state;
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {
        export interface IQueryRegistry {
          dogManagerSelected: (stream: Observable<IDogManager>) => Observable<IDogState>;
          dogManagerList: (stream: Observable<IDogManager>) => Observable<Array<IDogState>>;
        }

        export interface IReducerRegistry {
          'dogManager': (state: IDogManager, action: Actions) => IDogManager;
        }
      }
    }
  }
}

Registry.queries.registry.dog.dogManagerSelected = queryRegistryUtils._createQuery(DogClasses.DogManager, 'selected');
Registry.queries.registry.dog.dogManagerList = queryRegistryUtils._createQuery(DogClasses.DogManager, 'list');

Registry.reducers.registry.dog.dogManager = dogManagerReducer;
