// app
import {HomeRoutes} from './home/home.routes';
import {AboutRoutes} from './about/about.routes';
import {DogRoutes} from './dog/dog.routes';
import {PersonRoutes} from './person/person.routes';
import {EventRoutes} from './event/event.routes';
''

export const routes: Array<any> = [
  ...HomeRoutes,
  ...DogRoutes,
  ...AboutRoutes,
  ...PersonRoutes,
  ...EventRoutes
];
