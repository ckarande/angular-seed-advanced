import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getBreeds, getBreedFilter, getSelectedBreed } from '../../shared/ngrx/index';
import { IBreedState, Breed, BreedActionTypes } from '../../shared/registry/breed/index';

@Component({
  moduleId: module.id,
  selector: 'sd-breed',
  templateUrl: 'breed.component.html',
  styleUrls: [
    'breed.component.css',
  ],
})
export class BreedComponent implements OnInit {

  public breeds$: Observable<Array<IBreedState>>;
  public filter$: Observable<string>;
  public filteredBreeds$: Observable<Array<IBreedState>>;
  public breed$: Observable<IBreedState>;
  public model: IBreedState; //= new Breed({name: '', sex: '', color: '', altered: false});
  public breedFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  breedNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(breed: IBreedState) {
    this.store.dispatch({type: BreedActionTypes.SELECT_BREED, payload: breed});
  }

  ngOnInit() {

    this.breeds$ = this.store.let(getBreeds);
    
    this.store.let(getSelectedBreed).subscribe(
      (breed: IBreedState) => { 
        this.model = breed;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getBreedFilter);

    this.filteredBreeds$ = Observable.combineLatest(this.breeds$, this.filter$, (breeds: Array<IBreedState>, filter: string) => { 
      return breeds.filter((breed: IBreedState) => new RegExp(filter, 'gi').test(breed.name));
    } );

    this.breedNameCtrl = new FormControl();
    this.breedNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: BreedActionTypes.FILTER_BREEDS, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
