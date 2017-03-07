import { Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace i18n {
            export interface ICategoryRegistry {
                CATEGORY: string;
            }
        }
    }
}

Registry.categories.i18n.CATEGORY = 'Multilingual';

export const CATEGORY = 'Multilingual';
