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
import * as actions from '../actions/titlecategory.action';
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
      .get('/titlecategory')
      .map(result => {
        this.sails.on('titlecategory').subscribe(
          (titlecategoryEvent: sailsResponses.SailsPublishMessages<ITitleCategoryState>) => {
          
            switch (titlecategoryEvent.verb) {
              case 'created':
                let createMessage: sailsResponses.SailsPublishCreateMessage<ITitleCategoryState> = <sailsResponses.SailsPublishCreateMessage<ITitleCategoryState>>titlecategoryEvent;
                this.store.dispatch(new actions.CreateTitleCategoryActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: sailsResponses.SailsPublishDestroyMessage<ITitleCategoryState> = <sailsResponses.SailsPublishDestroyMessage<ITitleCategoryState>>titlecategoryEvent;
                this.store.dispatch(new actions.DestroyTitleCategoryActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: sailsResponses.SailsPublishUpdateMessage<ITitleCategoryState> = <sailsResponses.SailsPublishUpdateMessage<ITitleCategoryState>>titlecategoryEvent; 
                this.store.dispatch(new actions.UpdateTitleCategoryActionInternal(updateMessage.data));
                break;
              default:
              console.log('getTitleCategories: socket monitoring: Unknown type of socket event: ', titlecategoryEvent);
            }
          },
          (error) => {console.log('titlecategory event: Got error from /titlecategory subscription: ', error, error.stack);},
          () => {console.log('Subscription complete for /titlecategory');}
        );

       return result.data;
     });

  }
}
