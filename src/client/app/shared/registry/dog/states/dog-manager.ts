import { Registry, Model, State } from 'ngrx-registry';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace dog {
                export interface IClassRegistry {
                    DogManager: typeof DogManager;
                }

                export interface IObjectRegistry {
                    initialDogManagerState: Model.registry.dog.IDogManager;
                }

                export interface IDogManager extends Model.registry.common.IEntityManager<Model.registry.dog.IDogState> {}
            }
        }
    }
}

class DogManager extends Registry.classes.registry.common.EntityManager<Model.registry.dog.IDogState> {};

Registry.classes.registry.dog.DogManager = DogManager;

Registry.objects.registry.dog.initialDogManagerState = new DogManager();
