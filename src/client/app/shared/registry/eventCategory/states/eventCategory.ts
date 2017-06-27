import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { Event } from '../../event/index';
import { Organization } from '../../organization/index';

export interface IEventCategoryState extends IEntity {
    name: string;
    organization: Array<Organization>;
    events: Array<Event>; 
};

export class EventCategory extends Entity implements IEventCategoryState {
    name: string;
    organization: Array<Organization>;
    events: Array<Event>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            organization: [],
            events: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
