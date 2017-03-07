// angular
import { Injectable, Inject } from '@angular/core';

// libs
import * as _ from 'lodash';
import { Angulartics2, Angulartics2Segment } from 'angulartics2';
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace analytics {

      export interface IServiceRegistry {
        AnalyticsService: typeof AnalyticsService;
      }

      export interface IAnalyticsProperties {
        category?: string;
        label?: string;
        value?: number;
      }

      export interface IAnalytics {
        track(action: string, properties: IAnalyticsProperties): void;
      }

      export interface IAnalyticsService extends IAnalytics {
        pageTrack(path: string, location: any): void;
        identify(properties: any): void;
        devMode(enable?: boolean): boolean;
      }

    }
  }
};

/**
 * Wrapper for Angulartics2
 */
@Injectable()
export class AnalyticsService implements Model.analytics.IAnalyticsService {

  constructor(private angulartics2: Angulartics2, private segment: Angulartics2Segment) {
    // options
    // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
    // angulartics2.virtualPageviews(value: boolean);
    // angulartics2.excludeRoutes(routes: Array<string>);
    // angulartics2.firstPageview(value: boolean);
    // angulartics2.withBase(value: string);

    this.devMode(false);
  }

  /**
   * Track actions, events, etc.
   **/
  public track(action: string, properties: Model.analytics.IAnalyticsProperties): void {
    if (!this.devMode()) {
      this.segment.eventTrack(action, properties);
    }
  }

  /**
   * Called automatically by default with Angular 2 Routing
   * However, that can be turned off and this could be used manually
   **/
  public pageTrack(path: string, location: any): void {
    if (!this.devMode()) {
      this.segment.pageTrack(path, location);
    }
  }

  /**
   * Identify authenticated users
   **/
  public identify(properties: any): void {
    if (!this.devMode()) {
      this.segment.setUserProperties(properties);
    }
  }

  /**
   * Control whether analytics are tracked
   * true: dev mode on, therefore do not track anything
   * false: dev mode off, track everything
   **/
  public devMode(enable?: boolean): boolean {
    if (typeof enable !== 'undefined') {
      this.angulartics2.developerMode(enable);
    }
    return this.angulartics2.settings.developerMode;
  }
}

/**
 * Base class
 * Standardizes tracking actions and categorization
 */
export class Analytics implements Model.analytics.IAnalytics {
  // sub-classes should define their category
  public category: string;

  constructor(@Inject(AnalyticsService) public analytics: Model.analytics.IAnalytics) {

  }

  /**
   * Track actions, events, etc.
   **/
  track(action: string, properties: Model.analytics.IAnalyticsProperties): void {
    this.analytics.track(action, _.extend(properties, { category: this.category }));
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace analytics {
      export interface IClassRegistry {
        Analytics: typeof Analytics;
      }

      export interface IProviderRegistry {
        Angulartics2: typeof Angulartics2;
        Angulartics2Segment: typeof Angulartics2Segment;
        AnalyticsService: typeof AnalyticsService;
      }
    }
  }
};

Registry.services.analytics.AnalyticsService = AnalyticsService;

// Initialize
Object.assign(Registry.classes.analytics, {
  Analytics: Analytics
});

Registry.services.analytics.AnalyticsService = AnalyticsService;

Object.assign(Registry.providers.analytics, {
  Angulartics2: Angulartics2, 
  Angulartics2Segment: Angulartics2Segment, 
  AnalyticsService: AnalyticsService
});

Registry.providers.analytics.ANALYTICS_PROVIDERS.push(Angulartics2, Angulartics2Segment, AnalyticsService);
