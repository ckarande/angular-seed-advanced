import { ITitleCategoryState } from './titleCategory';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface ITitleCategoryManager extends IEntityManager<ITitleCategoryState> {};

export class TitleCategoryManager extends EntityManager<ITitleCategoryState> {};

export const titleCategoriesInitialState: ITitleCategoryManager = new TitleCategoryManager();
