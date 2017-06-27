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
import { ITitleState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/title.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class TitleService extends Analytics {

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

  getTitles(): Observable<Array<ITitleState>> {

    return this.sails
      .get('/title')
      .map(result => {
        this.sails.on('title').subscribe(
          (titleEvent: sailsResponses.SailsPublishMessages<ITitleState>) => {
          
            switch (titleEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<ITitleState> = <sailsResponses.SailsPublishCreateMessage<ITitleState>>titleEvent;
                this.store.dispatch(new actions.CreateTitleActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<ITitleState> = <sailsResponses.SailsPublishDestroyMessage<ITitleState>>titleEvent;
                this.store.dispatch(new actions.DestroyTitleActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<ITitleState> = <sailsResponses.SailsPublishUpdateMessage<ITitleState>>titleEvent; 
                this.store.dispatch(new actions.UpdateTitleActionInternal(updateMessage.data));
                break;
              default:
              console.log('getTitles: socket monitoring: Unknown type of socket event: ', titleEvent);
            }
          },
          (error) => {console.log('title event: Got error from /title subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /title');}
        );

       return result.data;
     });

  }
}
