// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IEventCategoryState } from '../states/index';

// module
import { EventCategoryService } from '../services/eventCategory.service';
import * as actions from '../actions/eventCategory.action';

@Injectable()
export class EventCategoryEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.EventCategoryActionTypes.INITIALIZE_EVENTCATEGORIES)
    .startWith(new actions.InitializeEventCategoriesAction)
    .switchMap(() => this.eventCategoryService.getEventCategories())
    .map(eventcategories => {
      return new actions.InitializeEventCategoriesActionInternal(eventcategories);
    })
    .catch((error) => Observable.of(new actions.InitializeEventCategoriesActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.EventCategoryActionTypes.FILTER_EVENTCATEGORIES)
  //   .map(toPayload)
  //   .switchMap((query) => this.eventcategoryService.getEventCategories(query))
  //   .map(eventcategories => {
  //     return new actions.InitializeEventCategoriesActionInternal(eventcategories);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeEventCategoriesActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private eventCategoryService: EventCategoryService,
    private _sailsService: SailsService
  ) {}
}
