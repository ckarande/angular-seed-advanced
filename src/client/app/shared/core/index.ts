
import { Registry } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].core = {});
import './domains';

// utilities: generally static helpers (non-injectables)
import './utils/index';
import './interfaces/index';
import './services/index';
import './directives/index';
import './core.module';

export * from './utils/index';
export * from './interfaces/index';
export * from './services/index';
export * from './directives/index';
export * from './core.module';
