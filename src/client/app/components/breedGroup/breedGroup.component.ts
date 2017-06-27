import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getBreedGroups, getBreedGroupFilter, getSelectedBreedGroup } from '../../shared/ngrx/index';
import { IBreedGroupState, BreedGroup, BreedGroupActionTypes } from '../../shared/registry/breedGroup/index';

@Component({
  moduleId: module.id,
  selector: 'sd-breedGroup',
  templateUrl: 'breedGroup.component.html',
  styleUrls: [
    'breedGroup.component.css',
  ],
})
export class BreedGroupComponent implements OnInit {

  public breedGroups$: Observable<Array<IBreedGroupState>>;
  public filter$: Observable<string>;
  public filteredBreedGroups$: Observable<Array<IBreedGroupState>>;
  public breedGroup$: Observable<IBreedGroupState>;
  public model: IBreedGroupState ; //= new BreedGroup({name: '', sex: '', color: '', altered: false});
  public breedGroupFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  breedGroupNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(breedGroup: IBreedGroupState) {
    this.store.dispatch({type: BreedGroupActionTypes.SELECT_BREEDGROUP, payload: breedGroup});
  }

  ngOnInit() {

    this.breedGroups$ = this.store.let(getBreedGroups);
    
    this.store.let(getSelectedBreedGroup).subscribe(
      (breedGroup: IBreedGroupState) => { 
        this.model = breedGroup;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getBreedGroupFilter);

    this.filteredBreedGroups$ = Observable.combineLatest(this.breedGroups$, this.filter$, (breedGroups: Array<IBreedGroupState>, filter: string) => { 
      return breedGroups.filter((breedGroup: IBreedGroupState) => new RegExp(filter, 'gi').test(breedGroup.name));
    } );

    this.breedGroupNameCtrl = new FormControl();
    this.breedGroupNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: BreedGroupActionTypes.FILTER_BREEDGROUPS, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
