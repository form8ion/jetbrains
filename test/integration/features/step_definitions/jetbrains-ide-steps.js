import {promises as fs} from 'node:fs';

import {Given} from '@cucumber/cucumber';

Given('a JetBrains IDE is not being used', async function () {
  return undefined;
});

Given('a JetBrains IDE is being used', async function () {
  await fs.mkdir(`${this.projectRoot}/.idea`);
});
