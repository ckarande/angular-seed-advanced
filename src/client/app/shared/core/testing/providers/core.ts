// libs
import { Registry } from 'ngrx-registry';

// app
//const ANALYTICS_PROVIDERS = Registry.providers.analytics.ANALYTICS_PROVIDERS;
const services = Registry.services.core;

// module
//const WindowService = services.WindowService
//import { WindowService, ConsoleService, LogService, RouterExtensions, AppService } from '../../index';

// mocks
import { WindowMock } from '../mocks/window.mock';
import { RouterExtensionsMock } from '../mocks/router-extensions.mock';

export function TEST_CORE_PROVIDERS(options?: any): Array<any> {
  // options:
  // window:   = custom window mock (mainly for changing out language)

  let providers = [
    { provide: services.ConsoleService, useValue: console },
    { provide: services.WindowService, useClass: (options && options.window) || WindowMock },
    services.LogService,
   // ANALYTICS_PROVIDERS,
    { provide: services.RouterExtensions, useClass: RouterExtensionsMock },
    services.AppService
  ];

  return providers;
}
