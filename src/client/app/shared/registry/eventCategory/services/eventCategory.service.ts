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
import { IEventCategoryState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/eventCategory.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class EventCategoryService extends Analytics {

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

  getEventCategories(): Observable<Array<IEventCategoryState>> {

    return this.sails
      .get('/eventCategory')
      .map(result => {
        this.sails.on('eventCategory').subscribe(
          (eventCategoryEvent: sailsResponses.SailsPublishMessages<IEventCategoryState>) => {
          
            switch (eventCategoryEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IEventCategoryState> = <sailsResponses.SailsPublishCreateMessage<IEventCategoryState>>eventCategoryEvent;
                this.store.dispatch(new actions.CreateEventCategoryActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IEventCategoryState> = <sailsResponses.SailsPublishDestroyMessage<IEventCategoryState>>eventCategoryEvent;
                this.store.dispatch(new actions.DestroyEventCategoryActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IEventCategoryState> = <sailsResponses.SailsPublishUpdateMessage<IEventCategoryState>>eventCategoryEvent; 
                this.store.dispatch(new actions.UpdateEventCategoryActionInternal(updateMessage.data));
                break;
              default:
              console.log('getEventCategories: socket monitoring: Unknown type of socket event: ', eventCategoryEvent);
            }
          },
          (error) => {console.log('eventCategory event: Got error from /eventCategory subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /eventCategory');}
        );

       return result.data;
     });

  }
}
