import { useQuery } from '@tanstack/react-query';

import { User } from '@/features/user';
import { apiClient } from '@/lib/api-client';
import { queryKeys } from '@/lib/react-query';
export const getAuthUser = (): Promise<User> => {
  return apiClient.get('/auth/me');
};

//ログインしたときにauth-userをキャッシュにセットしているのでもしログインしていればキャッシュから値を取ってこれる...
//これってglobalDataかキャッシュかどっちがいいんだろう？
export const useUser = () => {
  const { data, isLoading } = useQuery({
    // queryKey: ['auth-user'],
    queryKey: queryKeys.auth.authUser,
    queryFn: () => getAuthUser(),
  });

  return { data, isLoading };
};
