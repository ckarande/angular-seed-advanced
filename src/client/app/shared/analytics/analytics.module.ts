// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// libs
import { Registry, Model } from 'ngrx-registry';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  providers: Registry.providers.analytics.ANALYTICS_PROVIDERS
})
export class AnalyticsModule {}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace analytics {
      export interface IModuleRegistry {
          Analytics: typeof AnalyticsModule;
      }
    }
  }
};

Registry.modules.analytics.Analytics = AnalyticsModule;
