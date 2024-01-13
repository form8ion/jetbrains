import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When, Then} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold, test, lift;

Before(async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold, test, lift} = await import('@form8ion/jetbrains'));

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.projectRoot = process.cwd();
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  await scaffold({projectRoot: this.projectRoot});
});

When('the project is lifted', async function () {
  if (await test({projectRoot: process.cwd()})) {
    this.result = await lift({projectRoot: this.projectRoot});
  }
});

Then('no error is thrown', async function () {
  return undefined;
});
