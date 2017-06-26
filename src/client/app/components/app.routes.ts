// app
import {HomeRoutes} from './home/home.routes';
import {AboutRoutes} from './about/about.routes';
import {DogRoutes} from './dog/dog.routes';
import {OrganizationRoutes} from './organization/organization.routes';
import {TitleCategoryRoutes} from './titlecategory/titlecategory.routes';
import {TitleRoutes} from './title/title.routes';
import {BreedRoutes} from './breed/breed.routes';
import {BreedGroupRoutes} from './breedGroup/breedGroup.routes';
import {MemberClubRoutes} from './memberClub/memberClub.routes';
import {PersonRoutes} from './person/person.routes';
import {EventRoutes} from './event/event.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...DogRoutes,
  ...OrganizationRoutes,
  ...TitleCategoryRoutes,
  ...TitleRoutes,
  ...BreedRoutes,
  ...BreedGroupRoutes,
  ...MemberClubRoutes,
  ...AboutRoutes,
  ...PersonRoutes,
  ...EventRoutes
];
