import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IModuleRegistry {
        i18n?: Model.i18n.IModuleRegistry;
    }
    export interface ICategoryRegistry {
        i18n?: Model.i18n.ICategoryRegistry;
    }
    export interface IComponentRegistry {
        i18n?: Model.i18n.IComponentRegistry;
    }
    export interface IClassRegistry {
        i18n?: Model.i18n.IClassRegistry;
    }
    export interface IServiceRegistry {
        i18n?: Model.i18n.IServiceRegistry;
    }
    export interface IDirectiveRegistry {
        i18n?: Model.i18n.IDirectiveRegistry;
    }
    export interface IProviderRegistry {
        i18n?: Model.i18n.IProviderRegistry;
    }
    export interface IObjectRegistry {
        i18n?: Model.i18n.IObjectRegistry;
    }
    export interface IReducerRegistry {
        i18n?: Model.i18n.IReducerRegistry;
    }
    export interface IQueryRegistry {
        i18n?: Model.i18n.IQueryRegistry;
    }
    export interface IActionRegistry {
        i18n?: Model.i18n.IActionRegistry;
    }
    export interface IGuardRegistry {
        i18n?: Model.i18n.IGuardRegistry;
    }
    export interface IEffectRegistry {
        i18n?: Model.i18n.IEffectRegistry;
    }
    export interface IAppState {
        i18n?: Model.i18n.IAppState;
    }

    export namespace i18n {
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
