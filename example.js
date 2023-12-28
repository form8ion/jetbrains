// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold, test, lift} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffold({projectRoot: process.cwd()});
})();

(async () => {
  if (await test({projectRoot: process.cwd()})) {
    await lift({projectRoot: process.cwd()});
  }
})();
