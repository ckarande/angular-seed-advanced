import { ITitleState } from './title';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface ITitleManager extends IEntityManager<ITitleState> {};

export class TitleManager extends EntityManager<ITitleState> {};

export const titlesInitialState: ITitleManager = new TitleManager();
