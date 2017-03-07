// angular
import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router, UrlTree, NavigationExtras } from '@angular/router';

// lib
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface ExtendedNavigationExtras extends NavigationExtras {
        // Options for nativescript
        clearHistory?: boolean;
        animated?: boolean;
        transition?: { // See -> https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html
          name?: string;
          instance?: any;
          duration?: number;
          curve?: any;
        };
        // END - Options for nativescript
      }

      export interface IRouterExtensions {
        navigate(commands: Array<any>, extras?: ExtendedNavigationExtras): Promise<boolean>;
        navigateByUrl(url: string | UrlTree, options?: ExtendedNavigationExtras): Promise<boolean>;
        back(): void;
      }

      export interface IServiceRegistry {
        RouterExtensions: typeof RouterExtensions;
      }
    }
  }
}

@Injectable()
export class RouterExtensions implements Model.core.IRouterExtensions {

  constructor(public router: Router, private locationStrategy: LocationStrategy) { }

  public navigate(commands: Array<any>, extras?: Model.core.ExtendedNavigationExtras): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }

  public navigateByUrl(url: string | UrlTree, options?: Model.core.ExtendedNavigationExtras): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }

  public back() {
    this.locationStrategy.back();
  }
}

Registry.services.core.RouterExtensions = RouterExtensions;

Registry.providers.core.CORE_PROVIDERS.push(RouterExtensions);
