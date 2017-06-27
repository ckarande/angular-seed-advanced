import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { BreedGroup } from '../../breedGroup/index';

export interface IBreedState extends IEntity {
    name: string;
    description: string;
    breedGroups: Array<BreedGroup>;
};

export class Breed extends Entity implements IBreedState {
    name: string;
    description: string;
    breedGroups: Array<BreedGroup>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            description: 'male',
            breedGroups: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
