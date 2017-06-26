import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface ITitleCategoryState extends IEntity {
    name: string;
    order: number;
    //organization: Organization;
    //titles: Title;
    
};

export class TitleCategory extends Entity implements ITitleCategoryState {
    name: string;
    order: number;
    //organization: Organization;
    //titles: Title;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            order: 1//,
            //organization: Organization,
            //titles: Title            
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
