import {promises as fs} from 'node:fs';

export default async function lift({projectRoot}) {
  await fs.mkdir(`${projectRoot}/.idea/runConfigurations`, {recursive: true});

  return {
    vcsIgnore: {directories: ['.idea', '!.idea/', '.idea/*', '!.idea/runConfigurations/']}
  };
}
