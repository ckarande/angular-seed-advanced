// libs
import { Registry, Model } from 'ngrx-registry';

// app
type ILang = Model.core.ILang;

export class DesktopConfig {

  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' },
    { code: 'fr', title: 'French' },
    { code: 'ru', title: 'Russian' },
    { code: 'bg', title: 'Bulgarian' }
  ];

}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace electron {
      export interface IClassRegistry {
        DesktopConfig: typeof DesktopConfig;
      }
    }
  }
}

Registry.classes.electron.DesktopConfig = DesktopConfig;
