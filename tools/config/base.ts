import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  // Sample API url
  API: this.API_SERVER
};

export = BaseConfig;

console.log('BASE defined as: ', BaseConfig.API);
