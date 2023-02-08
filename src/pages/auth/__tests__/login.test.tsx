import {
  appRender,
  screen,
  userEvent,
  waitFor,
} from '@/testing/test-utils';

import LoginPage, { redirectTo } from '../login';

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

describe('Login Page', () => {
  it('should login the user', async () => {
    await appRender(<LoginPage />);

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    const passwordInput =
      screen.getByLabelText(/password/i);

    const submitButton = screen.getByRole('button', {
      name: /Log In/i,
    });

    const credentials = {
      email: 'user1@test.com',
      password: 'password',
    };

    userEvent.type(emailInput, credentials.email);
    userEvent.type(passwordInput, credentials.password);

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith(
        redirectTo
      );
    });
  });
});
