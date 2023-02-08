import { LoginFormSchema } from '../login-form';

describe('login', () => {
  it('can not input invalid email', () => {
    const data = {
      email: 'aaa',
      password: 'password',
    };

    expect(() => LoginFormSchema.parse(data)).toThrow(
      'please input Email'
    );
  });

  it('can not input invalid min password ', () => {
    const data = {
      email: 'aaa@email.com',
      password: 'p',
    };

    expect(() => LoginFormSchema.parse(data)).toThrow(
      'more than 2 words'
    );
  });

  it('can not input invalid max password ', () => {
    const data = {
      email: 'aaa@email.com',
      password: 'ppppppppp',
    };

    expect(() => LoginFormSchema.parse(data)).toThrow(
      'less than 8 words'
    );
  });
});
