// libs
import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Registry, Model } from 'ngrx-registry';

// app
const AnalyticsService = Registry.services.analytics.AnalyticsService;
const Config = Registry.classes.core.Config;
const LogService = Registry.services.core.LogService;
const AppService = Registry.services.core.AppService;

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    @Inject(forwardRef(() => AnalyticsService)) public analytics: Model.analytics.IAnalyticsService,
    @Inject(forwardRef(() => LogService)) public log: Model.core.ILogService,
    @Inject(forwardRef(() => AppService)) private appService: Model.core.IAppService
  ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IComponentRegistry {
      AppComponent: typeof AppComponent;
    }
  }
}

Registry.components.AppComponent = AppComponent;
