
import { State, Registry } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].registry.dog = {});
import './domains';

import './common/index';
import './states/index';
import './actions/index';
import './services/index';
import './effects/index';
import './reducers/index';
// import './components/index';
