import { ReactElement } from 'react';

import { Seo } from '@/components/seo/seo';
import { PrivateLayout } from '@/layouts/private-layout';

const UserPage = () => {
  return (
    <>
      <Seo title="users" />
      someData
    </>
  );
};

UserPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default UserPage;
