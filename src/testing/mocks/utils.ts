import { RestRequest } from 'msw';

import { IS_TEST } from '@/config/constants';
import { User } from '@/features/user';

import { testData } from '../test-data';

import { db } from './db';

const AUTH_TOKEN = 'ThisIsTestAuthToken';

export const AUTH_COOKIE = 'auth-token';

const sanitizeUser = (userData: any): User => {
  const user: User = {
    id: userData.id,
    name: userData.name,
  };

  return user;
};

export const getUser = () =>
  sanitizeUser(testData.users[0]);

export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password !== password) {
    throw new Error('Invalid username or password');
  }
  const sanitizedUser = sanitizeUser(user);
  const token = AUTH_TOKEN;
  return { user: sanitizedUser, jwt: token };
};

export const requireAuth = ({
  req,
  shouldThrow = true,
}: {
  req: RestRequest;
  shouldThrow?: boolean;
}) => {
  if (IS_TEST) {
    return getUser();
  }

  const encodedToken = req.cookies[AUTH_COOKIE];

  if (encodedToken !== AUTH_TOKEN) {
    if (shouldThrow) {
      throw new Error('No authorization token provided!');
    }
    return null;
  }

  return getUser();
};
