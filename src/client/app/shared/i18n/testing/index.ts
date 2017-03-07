// libs
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { Registry } from 'ngrx-registry';

// module
const MultilingualService = Registry.services.i18n.MultilingualService;

// mocks
import { TranslateMock } from './mocks/ng2-translate.mock';
import { TranslateLoaderMock } from './mocks/ng2-translate-loader.mock';

export function TEST_MULTILINGUAL_PROVIDERS(): Array<any> {

  let providers: Array<any> = [
    { provide: TranslateLoader, useClass: TranslateLoaderMock },
    { provide: TranslateService, useClass: TranslateMock },
    MultilingualService
  ];

  return providers;
}

export function TEST_MULTILINGUAL_RESET(): void {
  // ensure static is reset
  MultilingualService.SUPPORTED_LANGUAGES = [
    { code: 'en', title: 'English' }
  ];
}
