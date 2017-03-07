// libs
import { Component, ElementRef, ViewChild, Inject, forwardRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Registry, Model } from 'ngrx-registry';

// app
const RouterExtensions = Registry.services.core.RouterExtensions;
const Config = Registry.classes.core.Config;

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  public names$: Observable<any>;
  public newName: string = '';

  public dogs$: Observable<Array<Model.registry.dog.IDogState>>;

  constructor(
    private store: Store<Model.IAppState>, 
    @Inject(forwardRef(() => RouterExtensions)) public routerext: Model.core.IRouterExtensions
  ) {
    this.dogs$ = store.let(Registry.global.queries.getDogs);
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new Registry.actions.sample.AddAction(this.newName));
    this.newName = '';
    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export interface IComponentRegistry {
      HomeComponent: typeof HomeComponent;
    }
  }
}

Registry.components.HomeComponent = HomeComponent;
