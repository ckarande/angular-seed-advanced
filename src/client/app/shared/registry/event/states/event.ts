import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IEventState extends IEntity {
    name: string;
    venue: string;
    //hostClub: memberClub;
    startDate:  Date;
    endDate: Date;
    //eventCategory: eventCategory
};

export class Event extends Entity implements IEventState {
    name: string;
    venue: string;
    //hostClub: emberClub;
    startDate:  Date;
    endDate: Date;
    //eventCategory: eventCategory

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            venue: '',
            //hostClub: ??,
            startDate: new Date(),
            endDate: new Date()//,
            //eventCategory: eventCategory
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
