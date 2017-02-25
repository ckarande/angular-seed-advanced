export interface SailsResponse<T> {
    data: T;
}

export interface SailsMultiResponse<T> {
    data: Array<T>;
};

export interface SailsPublishCreateMessage<T> {
    id: number;
    verb: string;
    data: T;
}

export interface SailsPublishMessage<T> {
    id: number;
    verb: string;
}

export interface SailsPublishDestroyMessage<T> extends SailsPublishMessage<T> {
     previous?: T;
}

export interface SailsPublishUpdateMessage<T> extends SailsPublishMessage<T> {
    data: any;
    previous?: any;
}

export interface SailsPublishCreateMessage<T> extends SailsPublishMessage<T> {
  attribute: string;
  addedId: number;
  added?: T;
}

export interface SailsPublishDestroyMessage<T> extends SailsPublishMessage<T> {
  attribute: string;
  removedId: number;
}

export type SailsPublishMessages<T> = SailsPublishDestroyMessage<T>
| SailsPublishUpdateMessage<T> 
| SailsPublishCreateMessage<T>
| SailsPublishDestroyMessage<T>;
