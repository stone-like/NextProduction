import { Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useLogin } from '../../api/login';

export type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginFormSchema = z.object({
  email: z.string().email('please input Email'),
  password: z
    .string()
    .min(2, 'more than 2 words')
    .max(8, 'less than 8 words'),
});

type LoginData = z.infer<typeof LoginFormSchema>;

export const LoginForm = ({
  onSuccess,
}: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<LoginData>({
      resolver: zodResolver(LoginFormSchema),
    });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    login.submit(data);
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing="5"
      w="full"
    >
      <InputField
        label="Email"
        type="email"
        {...register('email')}
        error={formState.errors['email']}
      />
      <InputField
        label="Password"
        type="password"
        {...register('password')}
        error={formState.errors['password']}
      />
      <Button
        isLoading={login.isLoading}
        isDisabled={login.isLoading}
        type="submit"
      >
        Log in
      </Button>
    </Stack>
  );
};
