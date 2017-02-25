// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
//import { REGISTRY_COMPONENTS } from './components/index';
import { REGISTRY_PROVIDERS } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [
   // REGISTRY_COMPONENTS
  ],
  providers: [
    REGISTRY_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    //REGISTRY_COMPONENTS,
  ]
})
export class RegistryModule {

  constructor(@Optional() @SkipSelf() parentModule: RegistryModule) {
    if (parentModule) {
      throw new Error('RegistryModule already loaded; Import in root module only.');
    }
  }
}
