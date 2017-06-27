import { IEventCategoryState } from './eventCategory';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IEventCategoryManager extends IEntityManager<IEventCategoryState> {};

export class EventCategoryManager extends EntityManager<IEventCategoryState> {};

export const eventCategoriesInitialState: IEventCategoryManager = new EventCategoryManager();
