import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface ITitleCategoryState extends IEntity {
    name: string;
    order: number;
    
};

export class TitleCategory extends Entity implements ITitleCategoryState {
    name: string;
    order: number;
    

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            order: 1,
             
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
