import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { Organization } from '../../organization/index';
import { Title } from '../../title/index';

export interface ITitleCategoryState extends IEntity {
    name: string;
    order: number;
    organization: Array<Organization>;
    titles: Array<Title>;
    
};

export class TitleCategory extends Entity implements ITitleCategoryState {
    name: string;
    order: number;
    organization: Array<Organization>;
    titles: Array<Title>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            order: 1,
            organization: [],
            titles: []            
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
