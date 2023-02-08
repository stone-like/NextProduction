import { factory, primaryKey } from '@mswjs/data';

import { uid } from '@/utils/uid';
const models = {
  user: {
    id: primaryKey(uid),
    name: String,
    email: String,
    password: String,
  },
  book: {
    id: primaryKey(uid),
    name: String,
    content: String,
  },
};

export const db = factory(models);
