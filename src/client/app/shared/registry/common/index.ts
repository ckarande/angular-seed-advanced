import { Registry } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].registry.common = {});
import './domains';

import './category.common';
import './states/index';
