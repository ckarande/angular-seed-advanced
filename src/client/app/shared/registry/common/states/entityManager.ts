import { Entity, IEntity } from './entity';

export interface PrototypeObject {
    constructor(newList: any, newItem: any): void;
}

export interface IEntityManager<T extends IEntity> {
    __proto__: PrototypeObject;
    list: Array<T>;
    selected: T;

    updateList(newList: Array<T>): IEntityManager<T>;

    updateSelected(newSelected: T): IEntityManager<T>;

    create(newItem: T): IEntityManager<T>;

    destroy(iItemToDestroy: T) : IEntityManager<T>;

    update(iItemToUpdate: T) : IEntityManager<T>;

    newInstance(newList: Array<T>, newSelectedItem: T);
}

export class EntityManager<T extends IEntity> implements IEntityManager<T> {
    __proto__: PrototypeObject;
    list: Array<T>;
    selected: T;

   constructor(initialList: Array<T> = <Array<T>>[], initialSelected: T = null) {
       this.list = initialList;
       this.selected = initialSelected;
   };

    toJSONValue() {
        return JSON.parse(JSON.stringify(this));
    }

   updateList(newList: Array<T>): IEntityManager<T> {
       return this.newInstance([...newList], this.selected);
   };

   updateSelected(newSelected: T): IEntityManager<T> {
       return this.newInstance(this.list, newSelected);
   };

   create(newItem: T): IEntityManager<T> {
       return this.newInstance([...this.list, newItem], this.selected);
   };

   destroy(iItemToDestroy: T) : IEntityManager<T> {
       let newSelected = (this.selected === null || this.selected === undefined || iItemToDestroy.id === this.selected.id) ? null : this.selected;
       return this.newInstance(this.list.filter(item => item.id !== iItemToDestroy.id), newSelected);
   };

   update(itemToUpdate: T) : IEntityManager<T> {
       let newSelected = (this.selected === null || this.selected === undefined) ? null : (itemToUpdate.id === this.selected.id) ? itemToUpdate : this.selected;
       return this.newInstance(this.list.map(item => (item.id === itemToUpdate.id) ? Object.assign({}, item, itemToUpdate) : item), newSelected);
   };

   newInstance(newList: Array<T>, newSelectedItem: T): IEntityManager<T> {
       return new this.__proto__.constructor(newList, newSelectedItem);
   }
};
