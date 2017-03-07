import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        analytics?: Model.analytics.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        analytics?: Model.analytics.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        analytics?: Model.analytics.IComponentRegistry;
    }
    export interface IClassRegistry {
        analytics?: Model.analytics.IClassRegistry;
    }
    export interface IServiceRegistry {
        analytics?: Model.analytics.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        analytics?: Model.analytics.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        analytics?: Model.analytics.IProviderRegistry;
    }
    export interface IObjectRegistry {
        analytics?: Model.analytics.IObjectRegistry;
    }
    export interface IReducerRegistry {
        analytics?: Model.analytics.IReducerRegistry;
    }
    export interface IQueryRegistry {
        analytics?: Model.analytics.IQueryRegistry;
    }
    export interface IActionRegistry {
        analytics?: Model.analytics.IActionRegistry;
    }
    export interface IGuardRegistry {
        analytics?: Model.analytics.IGuardRegistry;
    }
    export interface IEffectRegistry {
        analytics?: Model.analytics.IEffectRegistry;
    }
    export interface IAppState {
        analytics?: Model.analytics.IAppState;
    }

    export namespace analytics {
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
