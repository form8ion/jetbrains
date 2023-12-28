import {describe, expect, it} from 'vitest';
import any from '@travi/any';

import lift from './lifter.js';

describe('lifter', () => {
  const projectRoot = any.string();

  it('should prevent run configurations from being ignored', async () => {
    expect(await lift({projectRoot}))
      .toEqual({vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}});
  });
});
