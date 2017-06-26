import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IEventCategoryState extends IEntity {
    name: string;
    //organization: organization;
    //events: event;
    
};

export class EventCategory extends Entity implements IEventCategoryState {
    name: string;
    //organization: organization;
    //events: event;
    

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            //organization: organization,
            //events: event
             
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
