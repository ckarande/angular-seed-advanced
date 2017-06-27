// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IBreedGroupState } from '../states/index';

// module
import { BreedGroupService } from '../services/breedGroup.service';
import * as actions from '../actions/breedGroup.action';

@Injectable()
export class BreedGroupEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.BreedGroupActionTypes.INITIALIZE_BREEDGROUPS)
    .startWith(new actions.InitializeBreedGroupsAction)
    .switchMap(() => this.breedGroupService.getBreedGroups())
    .map(breedGroups => {
      return new actions.InitializeBreedGroupsActionInternal(breedGroups);
    })
    .catch((error) => Observable.of(new actions.InitializeBreedGroupsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.BreedGroupActionTypes.FILTER_BREEDGROUPS)
  //   .map(toPayload)
  //   .switchMap((query) => this.breedGroupService.getBreedGroups(query))
  //   .map(breedGroups => {
  //     return new actions.InitializeBreedGroupsActionInternal(breedGroups);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeBreedGroupsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private breedGroupService: BreedGroupService,
    private _sailsService: SailsService
  ) {}
}
