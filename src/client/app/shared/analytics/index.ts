
// libs
import { Registry } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].analytics = {});
import './domains';

import './services/index';
import './analytics.module';

export * from './services/index';
export * from './analytics.module';
