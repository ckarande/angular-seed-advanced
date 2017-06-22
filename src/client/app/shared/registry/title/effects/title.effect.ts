// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { ITitleState } from '../states/index';

// module
import { TitleService } from '../services/title.service';
import * as actions from '../actions/title.action';

@Injectable()
export class TitleEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.TitleActionTypes.INITIALIZE_TITLES)
    .startWith(new actions.InitializeTitlesAction)
    .switchMap(() => this.titleService.getTitles())
    .map(titles => {
      return new actions.InitializeTitlesActionInternal(titles);
    })
    .catch((error) => Observable.of(new actions.InitializeTitlesActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.TitleActionTypes.FILTER_TITLES)
  //   .map(toPayload)
  //   .switchMap((query) => this.titleService.getTitles(query))
  //   .map(titles => {
  //     return new actions.InitializeTitlesActionInternal(titles);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeTitlesActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private titleService: TitleService,
    private _sailsService: SailsService
  ) {}
}
