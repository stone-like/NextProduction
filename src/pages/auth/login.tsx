import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo/seo';
import { LoginForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';
import { useNotifications } from '@/stores/notifications';

export const redirectTo = '/user';

const LoginPage = () => {
  const router = useRouter();
  const { showNotification } = useNotifications();

  const onSuccess = () => {
    showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: 'Login Success',
    });
    const redirect = router.query.redirect as string;
    router.replace(redirect || redirectTo);
  };

  return (
    <>
      <Seo title="Log In" />
      <LoginForm onSuccess={onSuccess} />
    </>
  );
};
LoginPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <AuthLayout title="Log In">{page}</AuthLayout>;
};

export default LoginPage;
