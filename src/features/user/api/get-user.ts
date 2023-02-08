import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryKeys } from '@/lib/react-query';

import { User } from '../types';

type GetUserOptions = {
  params: {
    userId: string | undefined;
  };
};

//CSRの時はuseUserを使ってローディングかどうかを確かめればいい
//SSRの時はgetUserを使う(ローディングかどうか確かめる必要はない)
export const getUser = ({
  params,
}: GetUserOptions): Promise<User> => {
  return apiClient.get(`/user`, { params });
};

export const useUser = ({ params }: GetUserOptions) => {
  const { data, isLoading } = useQuery({
    // queryKey: ['user', params],
    queryKey: queryKeys.user.many(params),
    queryFn: () => getUser({ params }),
    enabled: !!params.userId,
  });
  ///enabledでuserIdがあるときのみ発火するようにする
  //  isFetchingとisFetchedのユースケースがよくわからない
  // return { data, isLoading: isFetching && !isFetched };

  return { data, isLoading };
};
