// convenient shorthand 
import { Ng2Jasmine, TestApi } from './shorthand/ng2-jasmine';
import '../../components/operators';

export const t: TestApi = Ng2Jasmine;

// e2e
export * from './e2e/dropdowns';

// shorthand
export * from './shorthand/ng2-jasmine';
