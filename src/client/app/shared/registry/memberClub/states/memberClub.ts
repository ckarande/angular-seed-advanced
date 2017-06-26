import { IEntity, Entity } from '../../common/states/index';
import * as _ from 'lodash';

export interface IMemberClubState extends IEntity {
    name: string;
    founded: Date;
    website: URL;
};

export class MemberClub extends Entity implements IMemberClubState {
    name: string;
    founded: Date;
    website: URL;

    defaultAttributes() {
        return Object.assign({}, super.defaultAttributes(), 
        {
            name: '',
            founded: new Date(),
            website: ''
        });
    };

    constructor(initialValues: any) {
        super(initialValues);
    };

}
