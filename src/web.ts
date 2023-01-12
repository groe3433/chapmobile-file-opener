import { WebPlugin } from '@capacitor/core';

import type { chapmobilefileopenerPlugin } from './definitions';

export class chapmobilefileopenerWeb
  extends WebPlugin
  implements chapmobilefileopenerPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
