import { homedir } from 'os';

import { appDirectoryName } from '@shared/configurations';

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`;
};
