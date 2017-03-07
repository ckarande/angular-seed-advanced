// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Registry, Model } from 'ngrx-registry';

// app
type ILang = Model.core.ILang;

// module
const CATEGORY = Registry.categories.i18n.CATEGORY;

type IMultilingualState = Model.i18n.IAppState;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IMultilingualService extends Model.analytics.IAnalytics {}
    }
  }
}

// service
@Injectable()
export class MultilingualService extends Registry.classes.analytics.Analytics implements Model.i18n.IMultilingualService {

  // default supported languages
  // see web.module.ts for example of how to provide different value
  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', title: 'English' }
  ];

  constructor(
    @Inject(forwardRef(() => Registry.services.analytics.AnalyticsService)) public analytics: Model.analytics.IAnalyticsService,
    private translate: TranslateService,
    @Inject(forwardRef(() => Registry.services.core.WindowService)) private win: Model.core.IWindow,
    private store: Store<IMultilingualState>
  ) {
    super(analytics);
    this.category = CATEGORY;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // use browser/platform lang if available
    let userLang = win.navigator.language.split('-')[0];

    // subscribe to changes
    store.select('i18n').subscribe((state: IMultilingualState) => {
      // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
      this.translate.use(state.lang);
    });

    // init the lang
    this.store.dispatch(new Registry.actions.i18n.ChangeAction(userLang));
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IServiceRegistry {
        MultilingualService: typeof MultilingualService;
      }
    }
  }
}

Registry.services.i18n.MultilingualService = MultilingualService;
