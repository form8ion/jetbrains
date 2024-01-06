import {promises as fs} from 'node:fs';

export default async function ({projectRoot}) {
  await fs.mkdir(`${projectRoot}/.idea/runConfigurations`);

  return {
    vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}
  };
}
