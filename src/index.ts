import { registerPlugin } from '@capacitor/core';

import type { chapmobilefileopenerPlugin } from './definitions';

const chapmobilefileopener = registerPlugin<chapmobilefileopenerPlugin>(
  'chapmobilefileopener',
  {
    web: () => import('./web').then(m => new m.chapmobilefileopenerWeb()),
  },
);

export * from './definitions';
export { chapmobilefileopener };
