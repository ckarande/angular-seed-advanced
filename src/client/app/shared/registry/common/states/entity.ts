import * as _ from 'lodash';

export interface IPrototypeObject {
    constructor(initialState: any): any;
};

export interface IEntity {
    __prototype__?: IPrototypeObject;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    equals(other:any): boolean;
    notEquals(other:any): boolean;
};

export class Entity implements IEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    equals(other:any): boolean {
        return this === other;
    };

    notEquals(other:any): boolean {
        return !this.equals(other);
    };

    defaultAttributes() {
        return {
            id: -1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    };

    myAttributes(): Array<string> {
        return  Object.keys(this.defaultAttributes());
    };

    constructor(initialState) {
         Object.assign(this, this.defaultAttributes, _.pick(initialState, this.myAttributes()));
    }
};
