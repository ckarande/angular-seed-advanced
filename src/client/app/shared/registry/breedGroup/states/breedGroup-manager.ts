import { IBreedGroupState } from './breedGroup';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IBreedGroupManager extends IEntityManager<IBreedGroupState> {};

export class BreedGroupManager extends EntityManager<IBreedGroupState> {};

export const breedGroupsInitialState: IBreedGroupManager = new BreedGroupManager();
