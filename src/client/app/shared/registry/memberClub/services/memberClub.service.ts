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
import { IMemberClubState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/memberClub.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class MemberClubService extends Analytics {

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

  getMemberClubs(): Observable<Array<IMemberClubState>> {

    return this.sails
      .get('/memberClub')
      .map(result => {
        this.sails.on('memberClub').subscribe(
          (memberClubEvent: sailsResponses.SailsPublishMessages<IMemberClubState>) => {
          
            switch (memberClubEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IMemberClubState> = <sailsResponses.SailsPublishCreateMessage<IMemberClubState>>memberClubEvent;
                this.store.dispatch(new actions.CreateMemberClubActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IMemberClubState> = <sailsResponses.SailsPublishDestroyMessage<IMemberClubState>>memberClubEvent;
                this.store.dispatch(new actions.DestroyMemberClubActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IMemberClubState> = <sailsResponses.SailsPublishUpdateMessage<IMemberClubState>>memberClubEvent; 
                this.store.dispatch(new actions.UpdateMemberClubActionInternal(updateMessage.data));
                break;
              default:
              console.log('getMemberClubs: socket monitoring: Unknown type of socket event: ', memberClubEvent);
            }
          },
          (error) => {console.log('memberClub event: Got error from /memberClub subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /memberClub');}
        );

       return result.data;
     });

  }
}
