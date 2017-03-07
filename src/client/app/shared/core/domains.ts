
import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        core?: Model.core.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        core?: Model.core.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        core?: Model.core.IComponentRegistry;
    }
    export interface IClassRegistry {
        core?: Model.core.IClassRegistry;
    }
    export interface IServiceRegistry {
        core?: Model.core.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        core?: Model.core.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        core?: Model.core.IProviderRegistry;
    }
    export interface IObjectRegistry {
        core?: Model.core.IObjectRegistry;
    }
    export interface IReducerRegistry {
        core?: Model.core.IReducerRegistry;
    }
    export interface IQueryRegistry {
        core?: Model.core.IQueryRegistry;
    }
    export interface IActionRegistry {
        core?: Model.core.IActionRegistry;
    }
    export interface IGuardRegistry {
        core?: Model.core.IGuardRegistry;
    }
    export interface IEffectRegistry {
        core?: Model.core.IEffectRegistry;
    }
    export interface IAppState {
        core?: Model.core.IAppState;
    }

    export namespace core {
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
