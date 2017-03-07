import { Model, Registry } from 'ngrx-registry';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace dog {
                export interface IDogState extends Model.registry.common.IEntity {
                    name: string;
                    sex: string;
                    color: string;
                    altered: boolean;
                }
            }
        }
    }
}

export class Dog extends Registry.classes.registry.common.Entity implements Model.registry.dog.IDogState {
    name: string;
    sex: string;
    color: string;
    altered: boolean;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            sex: 'male',
            color: 'black',
            altered: false
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

};

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace dog {
                interface IClassRegistry {
                    Dog: typeof Dog;
                }
            }
        }
    }
}

Registry.classes.registry.dog.Dog = Dog;
