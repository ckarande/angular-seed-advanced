// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { ITitleCategoryState } from '../states/index';

// module
import { TitleCategoryService } from '../services/titleCategory.service';
import * as actions from '../actions/titleCategory.action';

@Injectable()
export class TitleCategoryEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.TitleCategoryActionTypes.INITIALIZE_TITLECATEGORIES)
    .startWith(new actions.InitializeTitleCategoriesAction)
    .switchMap(() => this.titleCategoryService.getTitleCategories())
    .map(titlecategories => {
      return new actions.InitializeTitleCategoriesActionInternal(titlecategories);
    })
    .catch((error) => Observable.of(new actions.InitializeTitleCategoriesActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.TitleCategoryActionTypes.FILTER_TITLECATEGORIES)
  //   .map(toPayload)
  //   .switchMap((query) => this.titleCategoryService.getTitleCategories(query))
  //   .map(titlecategories => {
  //     return new actions.InitializeTitleCategoriesActionInternal(titlecategories);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeTitleCategoriesActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private titleCategoryService: TitleCategoryService,
    private _sailsService: SailsService
  ) {}
}
