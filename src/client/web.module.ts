// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader } from '@ngx-translate/core';
import { SailsModule } from 'angular2-sails';
import { Registry, Model } from 'ngrx-registry';

// app
const APP_COMPONENTS = Registry.components.APP_COMPONENTS;
const AppComponent = Registry.components.AppComponent;

import { routes } from './app/components/app.routes';

// feature modules
const CoreModule = Registry.modules.core.Core;
const AppReducer = Registry.global.reducers.AppReducer;
const AnalyticsModule = Registry.modules.analytics.Analytics;
const MultilingualModule = Registry.modules.i18n.MultilingualModule;
const SampleModule = Registry.modules.sample.SampleModule;
const RegistryModule = Registry.modules.registry.Registry;

const MultilingualEffects = Registry.effects.i18n.MultilingualEffects;
const NameListEffects = Registry.effects.sample.NameListEffects;
const DogEffects = Registry.effects.registry.dog.DogEffects;

// config
const Config = Registry.classes.core.Config;
const WindowService = Registry.services.core.WindowService;
const ConsoleService = Registry.services.core.ConsoleService;
const translateLoaderFactory = Registry.classes.i18n.translateLoaderFactory;

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= BUILD_TYPE %>') === 'dev') {
  // only output console logging in dev mode
  Config.DEBUG.LEVEL_4 = true;
}

// sample config (extra)
const AppConfig = Registry.classes.sample.AppConfig;
const MultilingualService = Registry.services.i18n.MultilingualService;

// custom i18n language support
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

let routerModule = RouterModule.forRoot(routes);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
  // desktop (electron) must use hash
  routerModule = RouterModule.forRoot(routes, {useHash: true});
}

declare var window, console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}

let DEV_IMPORTS: any[] = [];

if (String('<%= BUILD_TYPE %>') === 'dev') {
  DEV_IMPORTS = [
    ...DEV_IMPORTS,
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: ConsoleService, useFactory: (cons) }
    ]),
    routerModule,
    AnalyticsModule,
    MultilingualModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateLoaderFactory)
    }]),
    SailsModule.forRoot(),
    SampleModule,
    RegistryModule,
    StoreModule.provideStore(AppReducer),
    DEV_IMPORTS,
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects),
    EffectsModule.run(DogEffects)
  ],
  declarations: [
    APP_COMPONENTS
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
  bootstrap: [AppComponent]
})
export class WebModule { }

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
      WebModule: typeof WebModule;
    }
  }
}

Registry.modules.WebModule = WebModule;
