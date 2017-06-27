import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

import { BreedGroup } from '../../breedGroup/index';
import { EventCategory } from '../../eventCategory/index';
import { TitleCategory } from '../../titleCategory/index';

export interface IOrganizationState extends IEntity {
    name: string;
    abbreviation: string;
    order: number;
    website: string;
    titleCategories: Array<TitleCategory>;
    eventCategories: Array<EventCategory>;
    breedGroups: Array<BreedGroup>;
};

export class Organization extends Entity implements IOrganizationState {
    name: string;
    abbreviation: string;
    order: number;
    website: string;
    titleCategories: Array<TitleCategory>;
    eventCategories: Array<EventCategory>;
    breedGroups: Array<BreedGroup>;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            abbreviation: '',
            order: 1,
            website: '',
            titleCategories: [],
            eventCategories: [],
            breedGroups: []
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
