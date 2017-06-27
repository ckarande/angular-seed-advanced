import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { TitleCategory } from '../../titleCategory/index';

export interface ITitleState extends IEntity {
    name: string;
    titleType: string;
    order:  number;
    titleCategory: Array<TitleCategory>;
};

export class Title extends Entity implements ITitleState {
    name: string;
    titleType: string;
    order:  number;
       titleCategory: Array<TitleCategory>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            titleType: '',
            order: 1,
            titleCategory: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
