import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

// app
const getConfig = () => Registry.classes.core.Config;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IAppService {}
    }
  }
}

@Injectable()
export class AppService implements Model.core.IAppService {
  constructor(
    @Inject(forwardRef(() => Registry.services.analytics.AnalyticsService)) public analytics: Model.analytics.IAnalyticsService, 
    @Inject(forwardRef(() => Registry.services.core.LogService)) public log: Model.core.ILogService
  ) {
    this.log.debug(`AppService -> Config env: ${getConfig().ENVIRONMENT().ENV}`);
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IServiceRegistry {
        AppService: typeof AppService;
      }
    }
  }
}

Registry.services.core.AppService = AppService;

Registry.providers.core.CORE_PROVIDERS.push(AppService);
