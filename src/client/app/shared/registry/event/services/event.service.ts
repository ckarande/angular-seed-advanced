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
import { IEventState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/event.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class EventService extends Analytics {

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

  getEvents(): Observable<Array<IEventState>> {

    return this.sails
      .get('/event')
      .map(result => {
        this.sails.on('event').subscribe(
          (eventEvent: sailsResponses.SailsPublishMessages<IEventState>) => {
          
            switch (eventEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IEventState> = <sailsResponses.SailsPublishCreateMessage<IEventState>>eventEvent;
                this.store.dispatch(new actions.CreateEventActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IEventState> = <sailsResponses.SailsPublishDestroyMessage<IEventState>>eventEvent;
                this.store.dispatch(new actions.DestroyEventActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IEventState> = <sailsResponses.SailsPublishUpdateMessage<IEventState>>eventEvent; 
                this.store.dispatch(new actions.UpdateEventActionInternal(updateMessage.data));
                break;
              default:
              console.log('getEvents: socket monitoring: Unknown type of socket event: ', eventEvent);
            }
          },
          (error) => {console.log('event event: Got error from /event subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /event');}
        );

       return result.data;
     });

  }
}
