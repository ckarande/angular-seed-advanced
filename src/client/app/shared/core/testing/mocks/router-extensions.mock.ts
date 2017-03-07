// angular
import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';

// libs
import { Registry, Model } from 'ngrx-registry';

// module
type IRouterExtensions = Model.core.IRouterExtensions;
type ExtendedNavigationExtras = Model.core.ExtendedNavigationExtras;

@Injectable()
export class RouterExtensionsMock implements IRouterExtensions {
  navigate(commands: Array<any>, extras?: ExtendedNavigationExtras): Promise<boolean> {
    return Promise.resolve(true);
  }

  navigateByUrl(url: string | UrlTree, options?: ExtendedNavigationExtras): Promise<boolean> {
    return Promise.resolve(true);
  }

  back(): void {
    return;
  }
}
