import { Model, Registry } from 'ngrx-registry';
import * as _ from 'lodash';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace common {
                export interface IEntity {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    equals(other:any): boolean;
                    notEquals(other:any): boolean;
                }
            }
        }
    }
}

class Entity implements Model.registry.common.IEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    equals(other:any): boolean {
        return this === other;
    };

    notEquals(other:any): boolean {
        return !this.equals(other);
    };

    defaultAttributes() {
        return {
            id: -1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    };

    myAttributes(): Array<string> {
        return  Object.keys(this.defaultAttributes());
    };

    constructor(initialState) {
        Object.assign(this, this.defaultAttributes, _.pick(initialState, this.myAttributes()));
    }
};

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace common {
                export interface IClassRegistry {
                    Entity: typeof Entity;
                }
            }
        }
    }
}

Registry.classes.registry.common.Entity = Entity;
