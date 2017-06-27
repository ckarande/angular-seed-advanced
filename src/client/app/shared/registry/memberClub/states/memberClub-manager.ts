import { IMemberClubState } from './memberClub';
import { IEntityManager, EntityManager } from '../../common/states/index';

export interface IMemberClubManager extends IEntityManager<IMemberClubState> {};

export class MemberClubManager extends EntityManager<IMemberClubState> {};

export const memberClubsInitialState: IMemberClubManager = new MemberClubManager();
