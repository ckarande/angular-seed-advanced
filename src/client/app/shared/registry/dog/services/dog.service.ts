// angular
import { Injectable,  OnInit} from '@angular/core';
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
import { IDogState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/dog.action';
import * as sailsResponses from '../../common/states/sailsResponses';

@Injectable()
export class DogService extends Analytics {

  constructor(
    public analytics: AnalyticsService,
    private store: Store<IRegistryState>,
    private sails: SailsService
  ) {
    super(analytics);
    this.category = CATEGORY;
  }

  getDogs(): Observable<Array<IDogState>> {

    return this.sails
      .get('/dog')
      .map(result => {
        this.sails.on('dog').subscribe(
          (dogEvent: sailsResponses.SailsPublishMessages<IDogState>) => {
          
            switch (dogEvent.verb){
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IDogState> = <sailsResponses.SailsPublishCreateMessage<IDogState>>dogEvent;
                this.store.dispatch(new actions.CreateDogActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IDogState> = <sailsResponses.SailsPublishDestroyMessage<IDogState>>dogEvent;
                this.store.dispatch(new actions.DestroyDogActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IDogState> = <sailsResponses.SailsPublishUpdateMessage<IDogState>>dogEvent; 
                this.store.dispatch(new actions.UpdateDogActionInternal(updateMessage.data));
                break;
              default:
              console.log('getDogs: socket monitoring: Unknown type of socket event: ', dogEvent);
            }
          },
          (error) => {console.log('dog event: Got error from /dog subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /dog');}
        );

       return result.data;
     });

  }
}
