import { IEventState } from './event';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IEventManager extends IEntityManager<IEventState> {};

export class EventManager extends EntityManager<IEventState> {};

export const eventsInitialState: IEventManager = new EventManager();
