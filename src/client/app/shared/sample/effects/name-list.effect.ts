// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Registry, Model } from 'ngrx-registry';

// module
import * as nameList from '../actions/name-list.action';
const NameListService = Registry.services.sample.NameListService;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface INameListEffects {
        init$: Observable<Action>;
        add$: Observable<Action>;
      }
    }
  }
}

@Injectable()
export class NameListEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(nameList.ActionTypes.INIT)
    .startWith(new nameList.InitAction)
    .switchMap(() => this.nameListService.getNames())
    .map(payload => {
      let names = payload;
      return new nameList.InitializedAction(names);
    })
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch(() => Observable.of(new nameList.InitFailedAction()));

  @Effect() add$: Observable<Action> = this.actions$
    .ofType(nameList.ActionTypes.ADD)
    .map(action => {
      let name = action.payload;
      // analytics
      this.nameListService.track(nameList.ActionTypes.NAME_ADDED, { label: name });
      return new nameList.NameAddedAction(name);
    });

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    @Inject(forwardRef(() => NameListService)) private nameListService: Model.sample.INameListService
  ) { }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IEffectRegistry {
        NameListEffects: typeof NameListEffects;
      }
    }
  }
}

Registry.effects.sample.NameListEffects = NameListEffects;
