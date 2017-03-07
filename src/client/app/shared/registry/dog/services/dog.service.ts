// angular
import { Injectable, Inject, forwardRef } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SailsService } from 'angular2-sails';

import { Model, Registry } from 'ngrx-registry';

// app
const Analytics = Registry.classes.analytics.Analytics;
const AnalyticsService = Registry.services.analytics.AnalyticsService;

// module
const CATEGORY = Registry.categories.registry.dog.CATEGORY;

type ActionTypes = Model.registry.dog.Actions;
type DogState = Model.registry.dog.IDogState;
type State = Model.registry.IAppState;

type DestroyMessage = Model.registry.common.SailsPublishDestroyMessage<DogState>;
type CreateMessage = Model.registry.common.SailsPublishCreateMessage<DogState>;
type UpdateMessage = Model.registry.common.SailsPublishUpdateMessage<DogState>;
type SailsMessage = Model.registry.common.SailsPublishMessages<DogState>;

const Actions = Registry.actions.registry.dog;

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {

        export interface IDogService {
          getDogs:() => Observable<Array<Model.registry.dog.IDogState>>;
        }

      }
    }
  }
}

@Injectable()
export class DogService extends Analytics implements Model.registry.dog.IDogService {

  constructor(
    @Inject(forwardRef(() => AnalyticsService)) public analytics: Model.analytics.IAnalyticsService,
    private store: Store<State>,
    private sails: SailsService
  ) {
    super(analytics);
    this.category = CATEGORY;
  }

  getDogs(): Observable<Array<DogState>> {

    return this.sails
      .get('/dog')
      .map(result => {
        this.sails.on('dog').subscribe(
          (dogEvent: SailsMessage) => {
            switch (dogEvent.verb) {
              case 'created':
                let createMessage: CreateMessage = <CreateMessage>dogEvent;
                this.store.dispatch(new Actions.CreateDogActionInternal(createMessage.data));
                break;
              case 'destroyed':
                let destroyMessage: DestroyMessage = <DestroyMessage>dogEvent;
                this.store.dispatch(new Actions.DestroyDogActionInternal(destroyMessage.previous));
                break;
              case 'updated':
                let updateMessage: UpdateMessage = <UpdateMessage>dogEvent; 
                this.store.dispatch(new Actions.UpdateDogActionInternal(updateMessage.data));
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

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace registry {
      export namespace dog {

        export interface IServiceRegistry {
          DogService: typeof DogService;
        }

      }
    }
  }
}

Registry.services.registry.dog.DogService = DogService;
Registry.providers.registry.dog.DOG_PROVIDERS.push(DogService);
Registry.providers.registry.REGISTRY_PROVIDERS.push(DogService);
