import { Model, Registry } from 'ngrx-registry';

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace common {

                interface PrototypeObject {
                    constructor(newList: any, newItem: any): void;
                }

                export interface IEntityManager<T extends IEntity> {
                    __proto__: PrototypeObject;
                    list: Array<T>;
                    selected: T;

                    updateList(newList: Array<T>): IEntityManager<T>;
                    updateSelected(newSelected: T): IEntityManager<T>;
                    add(newItem: T): IEntityManager<T>;
                    destroy(iItemToDestroy: T) : IEntityManager<T>;
                    update(iItemToUpdate: T) : IEntityManager<T>;
                    newInstance(newList: Array<T>, newSelectedItem: T);
                }

            }
        }
    }
}

class EntityManager<T extends Model.registry.common.IEntity> implements Model.registry.common.IEntityManager<T> {
    __proto__: Model.registry.common.PrototypeObject;
    list: Array<T>;
    selected: T;

    constructor(initialList: Array<T> = <Array<T>>[], initialSelected: T = null) {
        this.list = initialList;
        this.selected = initialSelected;
    };

        toJSONValue() {
            return JSON.parse(JSON.stringify(this));
        }

    updateList(newList: Array<T>): Model.registry.common.IEntityManager<T> {
        return this.newInstance([...newList], this.selected);
    };

    updateSelected(newSelected: T): Model.registry.common.IEntityManager<T> {
        return this.newInstance(this.list, newSelected);
    };

    add(newItem: T): Model.registry.common.IEntityManager<T> {
        return this.newInstance([...this.list, newItem], this.selected);
    };

    destroy(iItemToDestroy: T) : Model.registry.common.IEntityManager<T> {
        let newSelected = (this.selected === null || this.selected === undefined || iItemToDestroy.id === this.selected.id) ? null : this.selected;
        return this.newInstance(this.list.filter(item => item.id !== iItemToDestroy.id), newSelected);
    };

    update(itemToUpdate: T) : Model.registry.common.IEntityManager<T> {
        let newSelected = (this.selected === null || this.selected === undefined) ? null : (itemToUpdate.id === this.selected.id) ? itemToUpdate : this.selected;
        return this.newInstance(this.list.map(item => (item.id === itemToUpdate.id) ? Object.assign({}, item, itemToUpdate) : item), newSelected);
    };

    newInstance(newList: Array<T>, newSelectedItem: T): Model.registry.common.IEntityManager<T> {
        return new this.__proto__.constructor(newList, newSelectedItem);
    }
}

declare module 'ngrx-registry' {
    export namespace Model {
        export namespace registry {
            export namespace common {
                export interface IClassRegistry {
                    EntityManager?: typeof EntityManager;
                }
            }
        }
    }
}

Registry.classes.registry.common.EntityManager = EntityManager;
