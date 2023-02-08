import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { requireAuth } from '../utils';

const getUserHandler = rest.get(
  `${API_URL}/user`,
  async (req, res, ctx) => {
    const user = requireAuth({ req });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json({ user })
    );
  }
);

export const userHandlers = [getUserHandler];
