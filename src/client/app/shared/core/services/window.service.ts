// angular
import { Injectable } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      // standard window interface
      export interface IWindow {
        navigator: any;
        location: any;
        alert(msg: string): void;
        confirm(msg: string): void;
      }

      export interface IServiceRegistry {
        WindowService: typeof WindowService;
      }
    }
  }
}

@Injectable()
export class WindowService implements Model.core.IWindow {
  
  public navigator: any = {};
  public location: any = {};
  public alert(msg: string): void { return; }
  public confirm(msg: string): void { return; }

}

Registry.services.core.WindowService = WindowService;

Registry.providers.core.CORE_PROVIDERS.push(WindowService);
