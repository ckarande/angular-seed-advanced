// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IDogState } from '../states/index';

// module
import { DogService } from '../services/dog.service';
import * as actions from '../actions/dog.action';

@Injectable()
export class DogEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.DogActionTypes.INITIALIZE_DOGS)
    .startWith(new actions.InitializeDogsAction)
    .switchMap(() => this.dogService.getDogs())
    .map(dogs => {
      return new actions.InitializeDogsActionInternal(dogs);
    })
    .catch((error) => Observable.of(new actions.InitializeDogsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.DogActionTypes.FILTER_DOGS)
  //   .map(toPayload)
  //   .switchMap((query) => this.dogService.getDogs(query))
  //   .map(dogs => {
  //     return new actions.InitializeDogsActionInternal(dogs);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeDogsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private dogService: DogService,
    private _sailsService: SailsService
  ) {}
}
