import {promises as fs} from 'node:fs';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import lift from './lifter.js';

vi.mock('node:fs');

describe('lifter', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should prevent run configurations from being ignored', async () => {
    expect(await lift({projectRoot}))
      .toEqual({vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}});

    expect(fs.mkdir).toHaveBeenCalledWith(`${projectRoot}/.idea/runConfigurations`, {recursive: true});
  });
});
