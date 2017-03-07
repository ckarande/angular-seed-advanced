// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { includes, map } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IEffectRegistry {
        MultilingualEffects: typeof MultilingualEffects;
      }
    }
  }
}

// module
//import { MultilingualService } from '../services/multilingual.service';
//import * as multilingual from '../actions/multilingual.action';

const ActionTypes = Registry.actions.i18n.TYPES;
const MultilingualService = Registry.services.i18n.MultilingualService;
const MultilingualActions = Registry.actions.i18n;

@Injectable()
export class MultilingualEffects {

  @Effect() change$: Observable<Action> = this.actions$
    .ofType(ActionTypes.CHANGE)
    .map(action => {
      let lang = action.payload;
      if (includes(map(MultilingualService.SUPPORTED_LANGUAGES, 'code'), lang)) {
        let langChangedAction = new MultilingualActions.LangChangedAction(lang);
        // track analytics
        this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
        // change state
        return new MultilingualActions.LangChangedAction(lang);
      } else {
        // not supported (here for example)
        return new MultilingualActions.LangUnsupportedAction(lang);
      }
    });

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    @Inject(forwardRef(() => MultilingualService)) private multilangService: Model.i18n.IMultilingualService
  ) { }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IEffectRegistry {
        MultilingualEffects: typeof MultilingualEffects;
      }
    }
  }
}

Registry.effects.i18n.MultilingualEffects = MultilingualEffects;
