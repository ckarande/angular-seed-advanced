import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IBreedState extends IEntity {
    name: string;
    description: string;
    //breedGroups: breedGroup;
};

export class Breed extends Entity implements IBreedState {
    name: string;
    description: string;
    //breedGroups: breedGroup;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            description: 'male'//,
            //breedGroups: breedGroup
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
