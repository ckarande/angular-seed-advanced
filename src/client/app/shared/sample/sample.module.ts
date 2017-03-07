// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// lib
import { Registry, Model } from 'ngrx-registry';
import * as _ from 'lodash';

// app
const SAMPLE_COMPONENTS: any[] = _.values(Registry.components.sample);
const SAMPLE_PROVIDERS: any[] = _.values(Registry.services.sample);
const MultilingualModule = Registry.modules.i18n.MultilingualModule;

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MultilingualModule,
  ],
  declarations: [
    SAMPLE_COMPONENTS
  ],
  providers: [
    SAMPLE_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SAMPLE_COMPONENTS,
    MultilingualModule
  ]
})
export class SampleModule {

  constructor(@Optional() @SkipSelf() parentModule: SampleModule) {
    if (parentModule) {
      throw new Error('SampleModule already loaded; Import in root module only.');
    }
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IModuleRegistry {
        SampleModule: typeof SampleModule;
      }
    }
  }
}

Registry.modules.sample.SampleModule = SampleModule;
