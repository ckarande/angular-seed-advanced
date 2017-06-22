// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';
import { IOrganizationState } from '../states/index';

// module
import { OrganizationService } from '../services/organization.service';
import * as actions from '../actions/organization.action';

@Injectable()
export class OrganizationEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(actions.OrganizationActionTypes.INITIALIZE_ORGANIZATIONS)
    .startWith(new actions.InitializeOrganizationsAction)
    .switchMap(() => this.organizationService.getOrganizations())
    .map(organizations => {
      return new actions.InitializeOrganizationsActionInternal(organizations);
    })
    .catch((error) => Observable.of(new actions.InitializeOrganizationsActionFailed(error)));

  // /**
  //  * This effect makes use of the `startWith` operator to trigger
  //  * the effect immediately on startup.
  //  */
  // @Effect() filter$: Observable<Action> = this.actions$
  //   .ofType(actions.OrganizationActionTypes.FILTER_ORGANIZATIONS)
  //   .map(toPayload)
  //   .switchMap((query) => this.organizationService.getOrganizations(query))
  //   .map(organizations => {
  //     return new actions.InitializeOrganizationsActionInternal(organizations);
  //   })
  //   .catch((error) => Observable.of(new actions.InitializeOrganizationsActionFailed(error)));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private organizationService: OrganizationService,
    private _sailsService: SailsService
  ) {}
}
