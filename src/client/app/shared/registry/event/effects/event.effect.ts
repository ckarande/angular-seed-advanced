// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IEventState } from '../states/index';

// module
import { EventService } from '../services/event.service';
import * as actions from '../actions/event.action';

@Injectable()
export class EventEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.EventActionTypes.INITIALIZE_EVENTS)
    .startWith(new actions.InitializeEventsAction)
    .switchMap(() => this.eventService.getEvents())
    .map(events => {
      return new actions.InitializeEventsActionInternal(events);
    })
    .catch((error) => Observable.of(new actions.InitializeEventsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.EventActionTypes.FILTER_EVENTS)
  //   .map(toPayload)
  //   .switchMap((query) => this.eventService.getEvents(query))
  //   .map(events => {
  //     return new actions.InitializeEventsActionInternal(events);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeEventsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private eventService: EventService,
    private _sailsService: SailsService
  ) {}
}
