// angular
import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Registry, Model } from 'ngrx-registry';

// app
const Analytics = Registry.classes.analytics.Analytics;
const AnalyticsService = Registry.services.analytics.AnalyticsService;
const Config = Registry.classes.core.Config;
const CATEGORY = Registry.categories.sample.CATEGORY;

// module
type ISampleState = Model.sample.IAppState;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface INameListService extends Model.analytics.IAnalytics {
        getNames: () => Observable<Array<string>>;
      }
    }
  }
}

@Injectable()
export class NameListService extends Analytics implements Model.sample.INameListService {

  constructor(
    @Inject(forwardRef(() => AnalyticsService)) public analytics: Model.analytics.IAnalyticsService,
    private store: Store<ISampleState>,
    private http: Http
  ) {
    super(analytics);
    this.category = CATEGORY;
  }

  getNames(): Observable<Array<string>> {
    return this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
      .map(res => res.json());
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IServiceRegistry {
        NameListService: typeof NameListService;
      }
    }
  }
}

Registry.services.sample.NameListService = NameListService;
Registry.providers.sample.SAMPLE_PROVIDERS.push(NameListService);
