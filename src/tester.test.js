import {directoryExists} from '@form8ion/core';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import projectUsesJetbrains from './tester.js';

vi.mock('@form8ion/core');

describe('tester', () => {
  const projectRoot = any.string();

  it('should return `true` when a `.idea/` directory exists', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.idea`).mockResolvedValue(true);

    expect(await projectUsesJetbrains({projectRoot})).toBe(true);
  });

  it('should return `false` when a `.idea/` directory does not exist', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.idea`).mockResolvedValue(false);

    expect(await projectUsesJetbrains({projectRoot})).toBe(false);
  });
});
