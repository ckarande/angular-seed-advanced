// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IBreedState } from '../states/index';

// module
import { BreedService } from '../services/breed.service';
import * as actions from '../actions/breed.action';

@Injectable()
export class BreedEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.BreedActionTypes.INITIALIZE_BREEDS)
    .startWith(new actions.InitializeBreedsAction)
    .switchMap(() => this.breedService.getBreeds())
    .map(breeds => {
      return new actions.InitializeBreedsActionInternal(breeds);
    })
    .catch((error) => Observable.of(new actions.InitializeBreedsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.BreedActionTypes.FILTER_BREEDS)
  //   .map(toPayload)
  //   .switchMap((query) => this.breedService.getBreeds(query))
  //   .map(breeds => {
  //     return new actions.InitializeBreedsActionInternal(breeds);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeBreedsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private breedService: BreedService,
    private _sailsService: SailsService
  ) {}
}
