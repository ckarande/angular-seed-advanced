import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry  {
        export interface IModuleRegistry {
            common?: Model.registry.common.IModuleRegistry;
        }
        export interface ICategoryRegistry {
            common?: Model.registry.common.ICategoryRegistry;
        }
        export interface IClassRegistry {
            common?: Model.registry.common.IClassRegistry;
        }
        export interface IServiceRegistry {
            common?: Model.registry.common.IServiceRegistry;
        }
        export interface IDirectiveRegistry {
            common?: Model.registry.common.IDirectiveRegistry;
        }
        export interface IProviderRegistry {
            common?: Model.registry.common.IProviderRegistry;
        }
        export interface IObjectRegistry {
            common?: Model.registry.common.IObjectRegistry;
        }
        export interface IReducerRegistry {
            common?: Model.registry.common.IReducerRegistry;
        }
        export interface IQueryRegistry {
            common?: Model.registry.common.IQueryRegistry;
        }
        export interface IActionRegistry {
            common?: Model.registry.common.IActionRegistry;
        }
        export interface IGuardRegistry {
            common?: Model.registry.common.IGuardRegistry;
        }
        export interface IEffectRegistry {
            common?: Model.registry.common.IEffectRegistry;
        }
        export interface IAppState {
            common?: Model.registry.common.IAppState;
        }

        export namespace common {
            export interface IModuleRegistry {}
            export interface ICategoryRegistry {}
            export interface IClassRegistry {}
            export interface IServiceRegistry {}
            export interface IDirectiveRegistry {}
            export interface IProviderRegistry {}
            export interface IObjectRegistry {}
            export interface IReducerRegistry {}
            export interface IQueryRegistry {}
            export interface IActionRegistry {}
            export interface IGuardRegistry {}
            export interface IEffectRegistry {}
            export interface IAppState {}
        }
    }
  }
}

export const holder = '';
