// libs
// any operators needed throughout your application
import './operators';
import { Registry, Model } from 'ngrx-registry';

import './app.component';
import './about/index';
import './home/index';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IComponentRegistry {
      APP_COMPONENTS: any[];
    }
  }
}

const AppComponent = Registry.components.AppComponent;
const AboutComponent = Registry.components.AboutComponent;
const HomeComponent = Registry.components.HomeComponent;
Registry.components.APP_COMPONENTS = [AppComponent, AboutComponent, HomeComponent];
