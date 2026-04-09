import {directoryExists} from '@form8ion/core';

export default async function lift({projectRoot}) {
  if (await directoryExists(`${projectRoot}/.idea/runConfigurations`)) {
    return {
      vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}
    };
  }

  return {};
}
