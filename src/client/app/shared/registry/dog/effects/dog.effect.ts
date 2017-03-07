// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';

import { Registry, Model } from 'ngrx-registry';

// module
const DogService = Registry.services.registry.dog.DogService;
const DogActionTypes = Registry.actions.registry.dog.TYPES;
const DogActions = Registry.actions.registry.dog;

@Injectable()
export class DogEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(DogActionTypes.INITIALIZE_DOGS)
    .startWith(new DogActions.InitializeDogsAction)
    .switchMap(() => this.dogService.getDogs())
    .map(dogs => {
      return new DogActions.InitializeDogsActionInternal(dogs);
    })
    .catch((error) => Observable.of(new DogActions.InitializeDogsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    @Inject(forwardRef(() => DogService)) private dogService: Model.registry.dog.IDogService,
    private _sailsService: SailsService
  ) {
    _sailsService.connect('http://localhost:1338');
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {

        export interface IEffectRegistry {
          DogEffects: typeof DogEffects;
        }

      }
    }
  }
}

Registry.effects.registry.dog.DogEffects = DogEffects;
