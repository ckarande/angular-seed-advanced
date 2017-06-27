import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { MemberClub } from '../../memberClub/index';
import { EventCategory } from '../../EventCategory/index';

export interface IEventState extends IEntity {
    name: string;
    venue: string;
    hostClub: Array<MemberClub>;
    startDate:  Date;
    endDate: Date;
    eventCategory: Array<EventCategory>;
};

export class Event extends Entity implements IEventState {
    name: string;
    venue: string;
    hostClub: Array<MemberClub>;
    startDate:  Date;
    endDate: Date;
    eventCategory: Array<EventCategory>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            venue: '',
            hostClub: [],
            startDate: new Date(),
            endDate: new Date(),
            eventCategory: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
