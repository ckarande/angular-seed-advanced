// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IMemberClubState } from '../states/index';

// module
import { MemberClubService } from '../services/memberClub.service';
import * as actions from '../actions/memberClub.action';

@Injectable()
export class MemberClubEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.MemberClubActionTypes.INITIALIZE_MEMBERCLUBS)
    .startWith(new actions.InitializeMemberClubsAction)
    .switchMap(() => this.memberClubService.getMemberClubs())
    .map(memberClubs => {
      return new actions.InitializeMemberClubsActionInternal(memberClubs);
    })
    .catch((error) => Observable.of(new actions.InitializeMemberClubsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.MemberClubActionTypes.FILTER_MEMBERCLUBS)
  //   .map(toPayload)
  //   .switchMap((query) => this.memberClubService.getMemberClubs(query))
  //   .map(memberClubs => {
  //     return new actions.InitializeMemberClubsActionInternal(memberClubs);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeMemberClubsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private memberClubService: MemberClubService,
    private _sailsService: SailsService
  ) {}
}
