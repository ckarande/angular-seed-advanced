// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface ILogService {
        debug(msg: any): void;
        error(err: any): void;
        warn(err: any): void;
        info(err: any): void;
      }
    }
  }
}

// module
import { Config } from '../utils/config';

@Injectable()
export class LogService implements Model.core.ILogService {

  constructor(@Inject(forwardRef(() => Registry.services.core.ConsoleService)) public logger: Model.core.IConsole) {}

  // debug (standard output)
  public debug(msg: any) {
    if (Config.DEBUG.LEVEL_4) {
      // console.debug does not work on {N} apps... use `log`
      this.logger.log(msg);
    }
  }

  // error
  public error(err: any) {
    if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
      this.logger.error(err);
    }
  }

  // warn
  public warn(err: any) {
    if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
      this.logger.warn(err);
    }
  }

  // info
  public info(err: any) {
    if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
      this.logger.info(err);
    }
  }

}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IServiceRegistry {
        LogService: typeof LogService;
      }
    }
  }
}

Registry.services.core.LogService = LogService;

Registry.providers.core.CORE_PROVIDERS.push(LogService);