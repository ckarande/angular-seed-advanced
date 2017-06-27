import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getTitles, getDogFilter, getSelectedTitle } from '../../shared/ngrx/index';
import { ITitleState, Title, TitleActionTypes } from '../../shared/registry/title/index';

@Component({
  moduleId: module.id,
  selector: 'sd-title',
  templateUrl: 'title.component.html',
  styleUrls: [
    'title.component.css',
  ],
})
export class TitleComponent implements OnInit {

  public titles$: Observable<Array<ITitleState>>;
  public filter$: Observable<string>;
  public filteredTitles$: Observable<Array<ITitleState>>;
  public title$: Observable<ITitleState>;
  public model: ITitleState ; //= new Title({name: '', sex: '', color: '', altered: false});
  public titleFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  titleNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(title: ITitleState) {
    this.store.dispatch({type: TitleActionTypes.SELECT_TITLE, payload: title});
  }

  ngOnInit() {

    this.titles$ = this.store.let(getTitles);
    
    this.store.let(getSelectedTitle).subscribe(
      (title: ITitleState) => { 
        this.model = title;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getDogFilter);

    this.filteredTitles$ = Observable.combineLatest(this.titles$, this.filter$, (titles: Array<ITitleState>, filter: string) => { 
      return titles.filter((title: ITitleState) => new RegExp(filter, 'gi').test(title.name));
    } );

    this.titleNameCtrl = new FormControl();
    this.titleNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: TitleActionTypes.FILTER_TITLES, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
