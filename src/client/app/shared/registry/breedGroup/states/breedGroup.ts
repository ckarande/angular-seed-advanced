import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IBreedGroupState extends IEntity {
    name: string;
    description: string;
    //organziations: organization;
    //breeds: breed;
};

export class BreedGroup extends Entity implements IBreedGroupState {
    name: string;
    description: string;
    //organziations: organization;
    //breeds: breed;
    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            description: ''//,
            //organziations: organization,
            //breeds: breed
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
