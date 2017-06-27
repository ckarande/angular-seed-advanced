import { IBreedState } from './breed';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IBreedManager extends IEntityManager<IBreedState> {};

export class BreedManager extends EntityManager<IBreedState> {};

export const breedsInitialState: IBreedManager = new BreedManager();
