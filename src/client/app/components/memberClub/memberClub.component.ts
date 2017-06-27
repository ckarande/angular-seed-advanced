import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getMemberClubs, getMemberClubFilter, getSelectedMemberClub } from '../../shared/ngrx/index';
import { IMemberClubState, MemberClub, MemberClubActionTypes } from '../../shared/registry/memberClub/index';

@Component({
  moduleId: module.id,
  selector: 'sd-memberClub',
  templateUrl: 'memberClub.component.html',
  styleUrls: [
    'memberClub.component.css',
  ],
})
export class MemberClubComponent implements OnInit {

  public memberClubs$: Observable<Array<IMemberClubState>>;
  public filter$: Observable<string>;
  public filteredMemberClubs$: Observable<Array<IMemberClubState>>;
  public memberClub$: Observable<IMemberClubState>;
  public model: IMemberClubState ; //= new MemberClub({name: '', sex: '', color: '', altered: false});
  public memberClubFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  memberClubNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(memberClub: IMemberClubState) {
    this.store.dispatch({type: MemberClubActionTypes.SELECT_MEMBERCLUB, payload: memberClub});
  }

  ngOnInit() {

    this.memberClubs$ = this.store.let(getMemberClubs);
    
    this.store.let(getSelectedMemberClub).subscribe(
      (memberClub: IMemberClubState) => { 
        this.model = memberClub;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getMemberClubFilter);

    this.filteredMemberClubs$ = Observable.combineLatest(this.memberClubs$, this.filter$, (memberClubs: Array<IMemberClubState>, filter: string) => { 
      return memberClubs.filter((memberClub: IMemberClubState) => new RegExp(filter, 'gi').test(memberClub.name));
    } );

    this.memberClubNameCtrl = new FormControl();
    this.memberClubNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: MemberClubActionTypes.FILTER_MEMBERCLUBS, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
