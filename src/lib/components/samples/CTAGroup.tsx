import { Stack, Button } from '@chakra-ui/react';

const CTAGroup = () => {
  return (
    <Stack gap={4}>
      <Button variant="outline">About Me</Button>
      <Button>My Writing</Button>
    </Stack>
  );
};

export default CTAGroup;
