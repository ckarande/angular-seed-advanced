import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        sample?: Model.sample.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        sample?: Model.sample.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        sample?: Model.sample.IComponentRegistry;
    }
    export interface IClassRegistry {
        sample?: Model.sample.IClassRegistry;
    }
    export interface IServiceRegistry {
        sample?: Model.sample.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        sample?: Model.sample.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        sample?: Model.sample.IProviderRegistry;
    }
    export interface IObjectRegistry {
        sample?: Model.sample.IObjectRegistry;
    }
    export interface IReducerRegistry {
        sample?: Model.sample.IReducerRegistry;
    }
    export interface IQueryRegistry {
        sample?: Model.sample.IQueryRegistry;
    }
    export interface IActionRegistry {
        sample?: Model.sample.IActionRegistry;
    }
    export interface IGuardRegistry {
        sample?: Model.sample.IGuardRegistry;
    }
    export interface IEffectRegistry {
        sample?: Model.sample.IEffectRegistry;
    }
    export interface IAppState {
        sample?: Model.sample.IAppState;
    }

    export namespace sample {
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
