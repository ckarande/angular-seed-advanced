import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        electron?: Model.electron.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        electron?: Model.electron.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        electron?: Model.electron.IComponentRegistry;
    }
    export interface IClassRegistry {
        electron?: Model.electron.IClassRegistry;
    }
    export interface IServiceRegistry {
        electron?: Model.electron.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        electron?: Model.electron.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        electron?: Model.electron.IProviderRegistry;
    }
    export interface IObjectRegistry {
        electron?: Model.electron.IObjectRegistry;
    }
    export interface IReducerRegistry {
        electron?: Model.electron.IReducerRegistry;
    }
    export interface IQueryRegistry {
        electron?: Model.electron.IQueryRegistry;
    }
    export interface IActionRegistry {
        electron?: Model.electron.IActionRegistry;
    }
    export interface IGuardRegistry {
        electron?: Model.electron.IGuardRegistry;
    }
    export interface IEffectRegistry {
        electron?: Model.electron.IEffectRegistry;
    }
    export interface IAppState {
        electron?: Model.electron.IAppState;
    }

    export namespace electron {
        export interface IModuleRegistry {}
        export interface ICategoryRegistry {}
        export interface IComponentRegistry {}
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

export const holder = '';
