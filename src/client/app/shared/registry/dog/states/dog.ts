import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IDogState extends IEntity {
    name: string;
    sex: string;
    color: string;
    altered: boolean;
};

export class Dog extends Entity implements IDogState {
    name: string;
    sex: string;
    color: string;
    altered: boolean;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            sex: 'male',
            color: 'black',
            altered: false
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
