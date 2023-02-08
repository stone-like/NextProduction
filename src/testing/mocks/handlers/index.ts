import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { authHandlers } from './auth';
import { bookHandlers } from './book';
import { userHandlers } from './user';

export const handlers = [
  ...authHandlers,
  ...bookHandlers,
  ...userHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ healthy: true })
    );
  }),
];
