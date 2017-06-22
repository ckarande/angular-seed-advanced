import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getTitleCategories, getTitleCategoryFilter, getSelectedTitleCategory } from '../../shared/ngrx/index';
import { ITitleCategoryState, TitleCategory, TitleCategoryActionTypes } from '../../shared/registry/titlecategory/index';

@Component({
  moduleId: module.id,
  selector: 'sd-titleCategory',
  templateUrl: 'titleCategory.component.html',
  styleUrls: [
    'titleCategory.component.css',
  ],
})
export class TitleCategoryComponent implements OnInit {

  public titleCategories$: Observable<Array<ITitleCategoryState>>;
  public filter$: Observable<string>;
  public filteredTitleCategories$: Observable<Array<ITitleCategoryState>>;
  public titleCategory$: Observable<ITitleCategoryState>;
  public model: ITitleCategoryState ; //= new TitleCategory({name: '', sex: '', color: '', altered: false});
  public titleCategoryFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  titleCategoryNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(titleCategory: ITitleCategoryState) {
    this.store.dispatch({type: TitleCategoryActionTypes.SELECT_TITLECATEGORY, payload: titleCategory});
  }

  ngOnInit() {

    this.titleCategories$ = this.store.let(getTitleCategories);
    
    this.store.let(getSelectedTitleCategory).subscribe(
      (titleCategory: ITitleCategoryState) => { 
        this.model = titleCategory;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getTitleCategoryFilter);

    this.filteredTitleCategories$ = Observable.combineLatest(this.titleCategories$, this.filter$, (titleCategories: Array<ITitleCategoryState>, filter: string) => { 
      return titleCategories.filter((titleCategory: ITitleCategoryState) => new RegExp(filter, 'gi').test(titleCategory.name));
    } );

    this.titleCategoryNameCtrl = new FormControl();
    this.titleCategoryNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: TitleCategoryActionTypes.FILTER_TITLECATEGORIES, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
