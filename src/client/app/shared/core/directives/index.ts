// app
import { PlatformDirective } from './platform.directive';
import { MediaQueryStatus } from './mediaQuery.directive';

export const CORE_DIRECTIVES: any[] = [
  PlatformDirective,
  MediaQueryStatus
];

export * from './platform.directive';
export * from './mediaQuery.directive';
