import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry  {
        export interface IModuleRegistry {
            dog?: Model.registry.dog.IModuleRegistry;
        }
        export interface ICategoryRegistry {
            dog?: Model.registry.dog.ICategoryRegistry;
        }
        export interface IClassRegistry {
            dog?: Model.registry.dog.IClassRegistry;
        }
        export interface IServiceRegistry {
            dog?: Model.registry.dog.IServiceRegistry;
        }
        export interface IDirectiveRegistry {
            dog?: Model.registry.dog.IDirectiveRegistry;
        }
        export interface IProviderRegistry {
            dog?: Model.registry.dog.IProviderRegistry;
        }
        export interface IObjectRegistry {
            dog?: Model.registry.dog.IObjectRegistry;
        }
        export interface IReducerRegistry {
            dog?: Model.registry.dog.IReducerRegistry;
        }
        export interface IQueryRegistry {
            dog?: Model.registry.dog.IQueryRegistry;
        }
        export interface IActionRegistry {
            dog?: Model.registry.dog.IActionRegistry;
        }
        export interface IGuardRegistry {
            dog?: Model.registry.dog.IGuardRegistry;
        }
        export interface IEffectRegistry {
            dog?: Model.registry.dog.IEffectRegistry;
        }
        export interface IAppState {
            dog?: Model.registry.dog.IAppState;
        }

        export namespace dog {
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
