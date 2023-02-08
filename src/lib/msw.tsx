import { MSWDevTools } from 'msw-devtools';
import { ReactNode } from 'react';

import { IS_DEVELOPMENT } from '@/config/constants';
import { handlers } from '@/testing/mocks';
import { db } from '@/testing/mocks/db';
export type MSWWrapperProps = {
  children: ReactNode;
};

require('@/testing/mocks/initialize');

export const MSWWrapper = ({
  children,
}: MSWWrapperProps) => {
  return (
    <>
      {IS_DEVELOPMENT && (
        <MSWDevTools db={db} handlers={handlers} />
      )}
      {children}
    </>
  );
};
