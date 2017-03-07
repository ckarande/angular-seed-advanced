// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// libs
import { Registry, Model } from 'ngrx-registry';

// module
const CORE_DIRECTIVES = Registry.directives.core.CORE_DIRECTIVES;
const CORE_PROVIDERS = Registry.providers.core.CORE_PROVIDERS;
const Config = Registry.classes.core.Config;

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    CORE_DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    CORE_DIRECTIVES
  ],
  providers: [
    CORE_PROVIDERS
  ]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and ConsoleService per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: configuredProviders
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded; Import in root module only.');
    }
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {

      export interface IModuleRegistry {
        Core: typeof CoreModule;
      }

    }
  }
}

Registry.modules.core.Core = CoreModule;
