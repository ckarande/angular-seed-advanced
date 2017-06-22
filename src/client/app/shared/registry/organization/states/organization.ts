import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IOrganizationState extends IEntity {
    name: string;
    abbreviation: string;
    order: number;
    website: string;
};

export class Organization extends Entity implements IOrganizationState {
    name: string;
    abbreviation: string;
    order: number;
    website: string;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            abbreviation: '',
            order: 1,
            website: ''
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
