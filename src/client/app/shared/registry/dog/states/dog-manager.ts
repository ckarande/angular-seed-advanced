import { IDogState } from './dog';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IDogManager extends IEntityManager<IDogState> {};

export class DogManager extends EntityManager<IDogState> {
    newInstance(newList: Array<IDogState>, newSelectedItem: IDogState) {
        return new DogManager(newList, newSelectedItem);
    }
};

export const dogsInitialState: IDogManager = new DogManager();
