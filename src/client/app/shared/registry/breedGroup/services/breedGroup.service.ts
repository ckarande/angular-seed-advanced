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
import { IBreedGroupState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/breedGroup.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class BreedGroupService extends Analytics {

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

  getBreedGroups(): Observable<Array<IBreedGroupState>> {

    return this.sails
      .get('/breedGroup')
      .map(result => {
        this.sails.on('breedGroup').subscribe(
          (breedGroupEvent: sailsResponses.SailsPublishMessages<IBreedGroupState>) => {
          
            switch (breedGroupEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<IBreedGroupState> = <sailsResponses.SailsPublishCreateMessage<IBreedGroupState>>breedGroupEvent;
                this.store.dispatch(new actions.CreateBreedGroupActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<IBreedGroupState> = <sailsResponses.SailsPublishDestroyMessage<IBreedGroupState>>breedGroupEvent;
                this.store.dispatch(new actions.DestroyBreedGroupActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<IBreedGroupState> = <sailsResponses.SailsPublishUpdateMessage<IBreedGroupState>>breedGroupEvent; 
                this.store.dispatch(new actions.UpdateBreedGroupActionInternal(updateMessage.data));
                break;
              default:
              console.log('getBreedGroups: socket monitoring: Unknown type of socket event: ', breedGroupEvent);
            }
          },
          (error) => {console.log('breedGroup event: Got error from /breedGroup subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /breedGroup');}
        );

       return result.data;
     });

  }
}
