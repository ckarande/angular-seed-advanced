import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface ITitleState extends IEntity {
    name: string;
    abbreviation: string;
    placement: string;
    order:  number;
};

export class Title extends Entity implements ITitleState {
    name: string;
    abbreviation: string;
    placement: string;
    order: number;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            abbreviation: '',
            placement: "suffix",
            order: 1
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
