// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// libs
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Registry, Model } from 'ngrx-registry';

// app

// module
const LangSwitcherComponent = Registry.components.i18n.LangSwitcherComponent;
const MultilingualService = Registry.services.i18n.MultilingualService;

// for AoT compilation
export function translateLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, `${Registry.classes.core.Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/i18n/`, '.json');
};

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateLoaderFactory)
    }]),
  ],
  declarations: [
    LangSwitcherComponent
  ],
  exports: [
    LangSwitcherComponent,
    TranslateModule
  ],
  providers: [
    MultilingualService
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MultilingualModule {

  // optional usage
  // ideally we could use this to override TranslateModule, but it requires the static above at moment
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: MultilingualModule,
      providers: configuredProviders
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MultilingualModule) {
    if (parentModule) {
      throw new Error('MultilingualModule already loaded; Import in root module only.');
    }
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IModuleRegistry {
        MultilingualModule: typeof MultilingualModule;
      }

      export interface IClassRegistry {
        translateLoaderFactory: (http: Http) => TranslateHttpLoader;
      }
    }
  }
}

Registry.modules.i18n.MultilingualModule = MultilingualModule;
Registry.classes.i18n.translateLoaderFactory = translateLoaderFactory;
