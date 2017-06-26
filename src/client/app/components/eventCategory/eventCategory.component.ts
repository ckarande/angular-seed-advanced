import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getEventCategories, getEventCategoryFilter, getSelectedEventCategory } from '../../shared/ngrx/index';
import { IEventCategoryState, EventCategory, EventCategoryActionTypes } from '../../shared/registry/eventcategory/index';

@Component({
  moduleId: module.id,
  selector: 'sd-eventCategory',
  templateUrl: 'eventCategory.component.html',
  styleUrls: [
    'eventCategory.component.css',
  ],
})
export class EventCategoryComponent implements OnInit {

  public eventCategories$: Observable<Array<IEventCategoryState>>;
  public filter$: Observable<string>;
  public filteredEventCategories$: Observable<Array<IEventCategoryState>>;
  public eventCategory$: Observable<IEventCategoryState>;
  public model: IEventCategoryState ; //= new EventCategory({name: '', sex: '', color: '', altered: false});
  public eventCategoryFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  eventCategoryNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(eventCategory: IEventCategoryState) {
    this.store.dispatch({type: EventCategoryActionTypes.SELECT_EVENTCATEGORY, payload: eventCategory});
  }

  ngOnInit() {

    this.eventCategories$ = this.store.let(getEventCategories);
    
    this.store.let(getSelectedEventCategory).subscribe(
      (eventCategory: IEventCategoryState) => { 
        this.model = eventCategory;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getEventCategoryFilter);

    this.filteredEventCategories$ = Observable.combineLatest(this.eventCategories$, this.filter$, (eventCategories: Array<IEventCategoryState>, filter: string) => { 
      return eventCategories.filter((eventCategory: IEventCategoryState) => new RegExp(filter, 'gi').test(eventCategory.name));
    } );

    this.eventCategoryNameCtrl = new FormControl();
    this.eventCategoryNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: EventCategoryActionTypes.FILTER_EVENTCATEGORIES, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
