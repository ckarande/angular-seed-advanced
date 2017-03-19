import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {DogComponent} from './dog/dog.component';
import {PersonComponent} from './person/person.component';
import {EventComponent} from './event/event.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  DogComponent,
  HomeComponent,
  PersonComponent,
  EventComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from './dog/dog.component';
export * from './person/person.component';
export * from './event/event.component';
