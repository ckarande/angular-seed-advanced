import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface ITitleState extends IEntity {
    name: string;
    titleType: string;
    order:  number;
    //titleCategory: TitleCategory;
};

export class Title extends Entity implements ITitleState {
    name: string;
    titleType: string;
    order:  number;
    //titleCategory: TitleCategory;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            titleType: '',
            order: 1//,
            //titleCategory: TitleCategory()
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
