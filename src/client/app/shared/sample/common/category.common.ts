import {Registry, Model } from 'ngrx-registry';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace sample {
            export interface ICategoryRegistry {
                CATEGORY: string;
            }
        }
    }
}

Registry.categories.sample.CATEGORY = 'Sample';

export const CATEGORY = 'Sample';
