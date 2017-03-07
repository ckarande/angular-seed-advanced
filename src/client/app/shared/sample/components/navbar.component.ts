// app
import { Component } from '@angular/core';
import { Registry, Model } from 'ngrx-registry';

@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    'navbar.component.css',
  ],
})
export class NavbarComponent {
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IComponentRegistry {
        NavbarComponent: typeof NavbarComponent;
      }
    }
  }
}

Registry.components.sample.NavbarComponent = NavbarComponent;
