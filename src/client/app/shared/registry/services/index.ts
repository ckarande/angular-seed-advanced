import { DogService } from '../dog/services/dog.service';
import { OrganizationService } from '../organization/services/organization.service';
import { TitleCategoryService } from '../titleCategory/services/titleCategory.service';
import { TitleService } from '../title/services/title.service';
import { BreedService } from '../breed/services/breed.service';
import { BreedGroupService } from '../breedGroup/services/breedGroup.service';
import { MemberClubService } from '../memberClub/services/memberClub.service';

export const REGISTRY_PROVIDERS: any[] = [
  DogService,
  OrganizationService,
  TitleCategoryService,
  TitleService,
  BreedService,
  BreedGroupService,
  MemberClubService
];

export * from '../dog/services/dog.service';
export * from '../organization/services/organization.service';
export * from '../titleCategory/services/titleCategory.service';
export * from '../title/services/title.service';
export * from '../breed/services/breed.service';
export * from '../breedGroup/services/breedGroup.service';
export * from '../memberClub/services/memberClub.service';
