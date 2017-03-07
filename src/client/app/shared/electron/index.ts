import {Registry, Model } from 'ngrx-registry';

Registry.registries.forEach((key) => Registry[key].electron = {});
import './domains';

import './services/event.service';
import './utils/desktop-config';
