import { Injector, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getOrganizations, getDogFilter, getSelectedOrganization } from '../../shared/ngrx/index';
import { IOrganizationState, Organization, OrganizationActionTypes } from '../../shared/registry/organization/index';

@Component({
  moduleId: module.id,
  selector: 'sd-organization',
  templateUrl: 'organization.component.html',
  styleUrls: [
    'organization.component.css',
  ],
})
export class OrganizationComponent implements OnInit {

  public organizations$: Observable<Array<IOrganizationState>>;
  public filter$: Observable<string>;
  public filteredOrganizations$: Observable<Array<IOrganizationState>>;
  public organization$: Observable<IOrganizationState>;
  public model: IOrganizationState ; //= new Organization({name: '', sex: '', color: '', altered: false});
  public organizationFilter: string;
  public test: any;

  stateCtrl: FormControl;
  filteredStates: any;

  organizationNameCtrl: FormControl;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  handleListClicked(organization: IOrganizationState) {
    this.store.dispatch({type: OrganizationActionTypes.SELECT_ORGANIZATION, payload: organization});
  }

  ngOnInit() {

    this.organizations$ = this.store.let(getOrganizations);
    
    this.store.let(getSelectedOrganization).subscribe(
      (organization: IOrganizationState) => { 
        this.model = organization;
       }, 
      (err) => { console.log('Got err: ', err); }, 
      () => { console.log('DONE!!!!'); } 
    );

    this.filter$ = this.store.let(getDogFilter);

    this.filteredOrganizations$ = Observable.combineLatest(this.organizations$, this.filter$, (organizations: Array<IOrganizationState>, filter: string) => { 
      return organizations.filter((organization: IOrganizationState) => new RegExp(filter, 'gi').test(organization.name));
    } );

    this.organizationNameCtrl = new FormControl();
    this.organizationNameCtrl.valueChanges
        .startWith('d')
        .subscribe(
          (query: string) => {this.store.dispatch({type: OrganizationActionTypes.FILTER_ORGANIZATIONS, payload: query}); }, 
          (err) => { console.log(err); }, 
          () => {console.log('DONE');}
        );
  }
}
