import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        registry?: Model.registry.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        registry?: Model.registry.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        registry?: Model.registry.IComponentRegistry;
    }
    export interface IClassRegistry {
        registry?: Model.registry.IClassRegistry;
    }
    export interface IServiceRegistry {
        registry?: Model.registry.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        registry?: Model.registry.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        registry?: Model.registry.IProviderRegistry;
    }
    export interface IObjectRegistry {
        registry?: Model.registry.IObjectRegistry;
    }
    export interface IReducerRegistry {
        registry?: Model.registry.IReducerRegistry;
    }
    export interface IQueryRegistry {
        registry?: Model.registry.IQueryRegistry;
    }
    export interface IActionRegistry {
        registry?: Model.registry.IActionRegistry;
    }
    export interface IGuardRegistry {
        registry?: Model.registry.IGuardRegistry;
    }
    export interface IEffectRegistry {
        registry?: Model.registry.IEffectRegistry;
    }
    export interface IAppState {
        registry?: Model.registry.IAppState;
    }

    export namespace registry {
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
