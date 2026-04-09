import {directoryExists} from '@form8ion/core';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import lift from './lifter.js';

vi.mock('@form8ion/core');

describe('lifter', () => {
  const projectRoot = any.string();

  it('should prevent run configurations from being ignored when the directory already exists', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.idea/runConfigurations`).thenResolve(true);

    expect(await lift({projectRoot}))
      .toEqual({vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}});
  });

  it('should not define vcsIgnore when the runConfigurations directory does not exist', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.idea/runConfigurations`).thenResolve(false);

    expect(await lift({projectRoot})).toEqual({});
  });
});
