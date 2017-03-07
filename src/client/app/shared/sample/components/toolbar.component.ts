import { Component, Inject, forwardRef } from '@angular/core';
import { Registry, Model } from 'ngrx-registry';

// app
const LogService = Registry.services.core.LogService;

@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [
    'toolbar.component.css',
  ],
})
export class ToolbarComponent {

  constructor(
    @Inject(forwardRef(() => LogService)) private log: Model.core.ILogService) {}

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
}


declare module 'ngrx-registry' {
  export namespace Model {
    export namespace sample {
      export interface IComponentRegistry {
        ToolbarComponent: typeof ToolbarComponent;
      }
    }
  }
}

Registry.components.sample.ToolbarComponent = ToolbarComponent;
