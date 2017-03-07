import { Registry, Model } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].sample = {});
import './domains';

import './common/index';
import './states/index';
import './actions/index';
import './services/index';
import './effects/index';
import './reducers/index';
import './components/index';
import './sample.module';

export * from './common/index';
export * from './states/index';
export * from './actions/index';
export * from './services/index';
export * from './effects/index';
export * from './reducers/index';
export * from './components/index';
export * from './sample.module';
