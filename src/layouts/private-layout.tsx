import {
  Box,
  Container,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { useLogout } from '@/features/auth';
import { Protected } from '@/features/auth';

type PrivateLayoutProps = {
  children: ReactNode;
};

export const PrivateLayout = ({
  children,
}: PrivateLayoutProps) => {
  return (
    <Protected>
      <Box maxW="container.lg" mx="auto" h="full">
        <PrivateNavbar />
        <Box minH="80%" mx="4">
          {children}
        </Box>
        <Box py="8" textAlign="center">
          Powered by <Link href="/">Books App</Link>
        </Box>
      </Box>
    </Protected>
  );
};

const PrivateNavbar = () => {
  const router = useRouter();
  const logout = useLogout({
    onSuccess: () => router.push('/'),
  });

  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <Link variant="solid" href="/">
              Book App
            </Link>
          </HStack>
          <HStack>
            <Button
              isDisabled={logout.isLoading}
              isLoading={logout.isLoading}
              variant="outline"
              onClick={() => logout.submit()}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
