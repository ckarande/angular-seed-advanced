import { Entity, IEntity } from './entity';

export interface IEntityManager<T extends IEntity> {
    list: Array<T>;
    selected: T;

    updateList(newList: Array<T>): IEntityManager<T>;

    updateSelected(newSelected: T): IEntityManager<T>;

    add(newItem: T): IEntityManager<T>;

    destroy(iItemToDestroy: T) : IEntityManager<T>;

    update(iItemToUpdate: T) : IEntityManager<T>;

    newInstance(newList: Array<T>, newSelectedItem: T);
}

export class EntityManager<T extends IEntity> implements IEntityManager<T> {
    list: Array<T>;
    selected: T;

   constructor(initialList: Array<T> = <Array<T>>[], initialSelected: T = null) {
       this.list = initialList;
       this.selected = initialSelected;
   };

    // toJSONValue(){
    //     return JSON.parse(JSON.stringify(this));
    // }

    // clone(){
    //     return new this.__proto__.constructor(this.toJSONValue());
    // }

   updateList(newList: Array<T>): IEntityManager<T> {
       return this.newInstance([...newList], this.selected);
   };

   updateSelected(newSelected: T): IEntityManager<T> {
       return this.newInstance(this.list, newSelected);
   };

   add(newItem: T): IEntityManager<T> {
       return this.newInstance([...this.list, newItem], this.selected);
   };

   destroy(iItemToDestroy: T) : IEntityManager<T> {
       return this.newInstance(this.list.filter(item => item.id !== iItemToDestroy.id), this.selected);
   };

   update(itemToUpdate: T) : IEntityManager<T> {
       return this.newInstance(this.list.map(item => (item.id === itemToUpdate.id) ? Object.assign({}, item, itemToUpdate) : item), this.selected);
   };

   newInstance(newList: Array<T>, newSelectedItem: T): IEntityManager<T> {
       return new EntityManager<T>(newList, newSelectedItem);
   }

};
