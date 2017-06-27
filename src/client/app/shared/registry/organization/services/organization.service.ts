// angular
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { SailsService } from 'angular2-sails';

// app
//import { Config } from '../../core/index';
import { SailsMultiResponse } from '../../common/states/sailsResponses';
import { Analytics, AnalyticsService } from '../../../analytics/index';
import { CATEGORY } from '../common/category.common';

// module
import { IOrganizationState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/organization.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class OrganizationService extends Analytics {

  constructor(
    public analytics: AnalyticsService,
    private store: Store<IRegistryState>,
    private sails: SailsService,
    private appService: AppService
  ) {
    super(analytics);
    this.category = CATEGORY;
    this.initialize();
  }

  initialize(): void {
    this.sails.connect(this.appService.apiServer);
  }

  getOrganizations(): Observable<Array<IOrganizationState>> {

    return this.sails
      .get('/organization')
      .map(result => {
        this.sails.on('organization').subscribe(
          (organizationEvent: sailsResponses.SailsPublishMessages<IOrganizationState>) => {
          
            switch (organizationEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IOrganizationState> = <sailsResponses.SailsPublishCreateMessage<IOrganizationState>>organizationEvent;
                this.store.dispatch(new actions.CreateOrganizationActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IOrganizationState> = <sailsResponses.SailsPublishDestroyMessage<IOrganizationState>>organizationEvent;
                this.store.dispatch(new actions.DestroyOrganizationActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IOrganizationState> = <sailsResponses.SailsPublishUpdateMessage<IOrganizationState>>organizationEvent; 
                this.store.dispatch(new actions.UpdateOrganizationActionInternal(updateMessage.data));
                break;
              default:
              console.log('getOrganizations: socket monitoring: Unknown type of socket event: ', organizationEvent);
            }
          },
          (error) => {console.log('organization event: Got error from /organization subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /organization');}
        );

       return result.data;
     });

  }
}
