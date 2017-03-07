import 'ngrx-registry';

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {

      // standard language interface
      export interface ILang {
        code: string;
        title: string;
      }
      
    }
  }
}
