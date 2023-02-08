import { useMutation } from '@tanstack/react-query';

import { User } from '@/features/user';
import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { LoginData } from '../types';

export const login = (
  data: LoginData
): Promise<{ user: User }> => {
  return apiClient.post('/auth/login', data);
};

type UseLoginOptions = {
  onSuccess?: (user: User) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['auth-user'], user);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
