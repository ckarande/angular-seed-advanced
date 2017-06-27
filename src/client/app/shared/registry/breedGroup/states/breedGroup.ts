import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { Breed } from '../../breed/index';
import { Organization } from '../../organization/index';

export interface IBreedGroupState extends IEntity {
    name: string;
    description: string;
    organziations: Array<Organization>;
    breeds: Array<Breed>;
};

export class BreedGroup extends Entity implements IBreedGroupState {
    name: string;
    description: string;
    organziations: Array<Organization>;
    breeds: Array<Breed>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            description: '',
            organziations: [],
            breeds: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
