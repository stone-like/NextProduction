import { Center } from '@chakra-ui/react';

import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field';
import { Link } from '@/components/link/link';
import { Seo } from '@/components/seo/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Book App" />
      <Center>
        <Button variant="solid" type="button">
          ClickMe
        </Button>
        <br />
        <InputField label="Name" />
        <br />
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default LandingPage;
