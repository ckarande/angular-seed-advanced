import { IOrganizationState } from './organization';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IOrganizationManager extends IEntityManager<IOrganizationState> {};

export class OrganizationManager extends EntityManager<IOrganizationState> {};

export const organizationsInitialState: IOrganizationManager = new OrganizationManager();
