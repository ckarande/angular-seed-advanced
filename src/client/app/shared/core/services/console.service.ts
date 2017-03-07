// angular
import { Injectable } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {

      // standard console interface
      export interface IConsole {
        log(m: any): void;
        debug(m: any): void;
        error(m: any): void;
        warn(m: any): void;
        info(m: any): void;
      }

      export interface IServiceRegistry {
        ConsoleService: typeof ConsoleService;
      }
    }
  }
}

@Injectable()
export class ConsoleService implements Model.core.IConsole {
  public log(m: any): void { return; }
  public debug(m: any): void { return; }
  public error(m: any): void { return; }
  public warn(m: any): void { return; }
  public info(m: any): void { return; }
}

Registry.services.core.ConsoleService = ConsoleService;

Registry.providers.core.CORE_PROVIDERS.push(ConsoleService);
