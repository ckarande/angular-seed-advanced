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
import { ITitleCategoryState } from '../states/index';
import { IRegistryState } from '../../states/index';
import * as actions from '../actions/titleCategory.action';
import * as sailsResponses from '../../common/states/sailsResponses';
import { AppService } from '../../../core/services/app.service';

@Injectable()
export class TitleCategoryService extends Analytics {

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

  getTitleCategories(): Observable<Array<ITitleCategoryState>> {

    return this.sails
      .get('/titleCategory')
      .map(result => {
        this.sails.on('titleCategory').subscribe(
          (titleCategoryEvent: sailsResponses.SailsPublishMessages<ITitleCategoryState>) => {
          
            switch (titleCategoryEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<ITitleCategoryState> = <sailsResponses.SailsPublishCreateMessage<ITitleCategoryState>>titleCategoryEvent;
                this.store.dispatch(new actions.CreateTitleCategoryActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<ITitleCategoryState> = <sailsResponses.SailsPublishDestroyMessage<ITitleCategoryState>>titleCategoryEvent;
                this.store.dispatch(new actions.DestroyTitleCategoryActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<ITitleCategoryState> = <sailsResponses.SailsPublishUpdateMessage<ITitleCategoryState>>titleCategoryEvent; 
                this.store.dispatch(new actions.UpdateTitleCategoryActionInternal(updateMessage.data));
                break;
              default:
              console.log('getTitleCategories: socket monitoring: Unknown type of socket event: ', titleCategoryEvent);
            }
          },
          (error) => {console.log('titleCategory event: Got error from /titleCategory subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /titleCategory');}
        );

       return result.data;
     });

  }
}
