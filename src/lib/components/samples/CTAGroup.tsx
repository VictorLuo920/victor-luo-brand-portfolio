import { Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';

const CTAGroup = () => {
  return (
    <Stack gap={4} w={{ base: '100%', md: '75%' }}>
      <Button variant="outline" as={Link} href="/about">
        About Me
      </Button>
      <Button as={Link} href="/writing">
        My Writing
      </Button>
    </Stack>
  );
};

export default CTAGroup;
