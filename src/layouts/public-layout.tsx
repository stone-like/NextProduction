import {
  Box,
  Container,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link } from '@/components/link';

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({
  children,
}: PublicLayoutProps) => {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <PublicNavbar />
      <Box minH="80%" mx="4">
        {children}
      </Box>
      <Box py="8" textAlign="center">
        Powered by <Link href="/">Books App</Link>
      </Box>
    </Box>
  );
};

const PublicNavbar = () => {
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
            <Link variant="solid" href="/auth/login">
              Log In
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
