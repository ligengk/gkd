import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 6688,
  name: 'Ligengk的GKD订阅',
  version: 1.0,
  author: 'ligengk',
  checkUpdateUrl: './ligengk_gkd.version.json5',
  supportUri: 'https://github.com/ligengk/gkd/issues/new/choose',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
