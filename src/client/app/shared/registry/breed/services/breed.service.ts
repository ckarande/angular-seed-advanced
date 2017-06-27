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
import { IBreedState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/breed.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class BreedService extends Analytics {

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

  getBreeds(): Observable<Array<IBreedState>> {

    return this.sails
      .get('/breed')
      .map(result => {
        this.sails.on('breed').subscribe(
          (breedEvent: sailsResponses.SailsPublishMessages<IBreedState>) => {
          
            switch (breedEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IBreedState> = <sailsResponses.SailsPublishCreateMessage<IBreedState>>breedEvent;
                this.store.dispatch(new actions.CreateBreedActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IBreedState> = <sailsResponses.SailsPublishDestroyMessage<IBreedState>>breedEvent;
                this.store.dispatch(new actions.DestroyBreedActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IBreedState> = <sailsResponses.SailsPublishUpdateMessage<IBreedState>>breedEvent; 
                this.store.dispatch(new actions.UpdateBreedActionInternal(updateMessage.data));
                break;
              default:
              console.log('getBreeds: socket monitoring: Unknown type of socket event: ', breedEvent);
            }
          },
          (error) => {console.log('breed event: Got error from /breed subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /breed');}
        );

       return result.data;
     });

  }
}
