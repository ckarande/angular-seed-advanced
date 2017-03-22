import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getDogs, getFilter, getSelectedDog } from '../../shared/ngrx/index';
import { IDogState, Dog, DogActionTypes } from '../../shared/registry/dog/index';

@Component({
  moduleId: module.id,
  selector: 'sd-dog',
  templateUrl: 'dog.component.html',
  styleUrls: [
    'dog.component.css',
  ],
})
export class DogComponent implements OnInit {

  public dogs$: Observable<Array<IDogState>>;
  public filter$: Observable<string>;
  public filteredDogs$: Observable<Array<IDogState>>;
  public dog$: Observable<IDogState>;
  public model: IDogState ; //= new Dog({name: '', sex: '', color: '', altered: false});
  public dogFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  dogNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(dog: IDogState) {
    this.store.dispatch({type: DogActionTypes.SELECT_DOG, payload: dog});
  }

  ngOnInit() {

    this.dogs$ = this.store.let(getDogs);
    
    this.store.let(getSelectedDog).subscribe(
      (dog: IDogState) => { 
        this.model = dog;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getFilter);

    this.filteredDogs$ = Observable.combineLatest(this.dogs$, this.filter$, (dogs: Array<IDogState>, filter: string) => { 
      return dogs.filter((dog: IDogState) => new RegExp(filter, 'gi').test(dog.name));
    } );

    this.dogNameCtrl = new FormControl();
    this.dogNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: DogActionTypes.FILTER_DOGS, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
