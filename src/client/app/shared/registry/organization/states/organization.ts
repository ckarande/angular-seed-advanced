import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IOrganizationState extends IEntity {
    name: string;
    abbreviation: string;
    order: number;
    website: string;
    //titleCategories: TitleCategory;
    //eventCategories: EventCategory;
    //breedGroups: BreedGroup;
};

export class Organization extends Entity implements IOrganizationState {
    name: string;
    abbreviation: string;
    order: number;
    website: string;
    //titleCategories: TitleCategory;
    //eventCategories: EventCategory;
    //breedGroups: BreedGroup;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            abbreviation: '',
            order: 1,
            website: ''//,
            //titleCategories: TitleCategory,
            //eventCategories: EventCategory,
            //breedGroups: BreedGroup
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
