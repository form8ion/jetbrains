import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the `runConfigurations` directory is prevented from being ignored', async function () {
  assert.deepEqual(this.result.vcsIgnore.directories, ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']);
});

Then('no additional ignores are defined', async function () {
  assert.isUndefined(this.result);
});
