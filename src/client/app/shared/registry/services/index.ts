import { DogService } from '../dog/services/dog.service';
import { OrganizationService } from '../organization/services/organization.service';
import { TitleCategoryService } from '../titlecategory/services/titlecategory.service';
import { TitleService } from '../title/services/title.service';

export const REGISTRY_PROVIDERS: any[] = [
  DogService,
  OrganizationService,
  TitleCategoryService,
  TitleService
];

export * from '../dog/services/dog.service';
export * from '../organization/services/organization.service';
export * from '../titlecategory/services/titlecategory.service';
export * from '../title/services/title.service';
