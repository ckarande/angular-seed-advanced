// libs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Registry, Model } from 'ngrx-registry';

declare var window: any;

export class ElectronEventService {

  public static on(name: string): Observable<any> {
    return Observable.fromEvent(window, name);
  }

  // TODO: add more helpers for menu setup and more...  
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace electron {
      export interface IClassRegistry {
        ElectronEventService: typeof ElectronEventService;
      }
    }
  }
}

Registry.classes.electron.ElectronEventService = ElectronEventService;
