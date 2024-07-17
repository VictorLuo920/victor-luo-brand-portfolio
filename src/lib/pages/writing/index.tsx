import { Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Writing = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading as="h1" size="4xl" mb={4}>
          My Writing
        </Heading>

        <Text fontSize="md" textAlign="initial">
          Placeholder Text for My Writing Page
        </Text>
      </Grid>
      <Button as={Link} href="/">
        Home Page
      </Button>
    </Flex>
  );
};

export default Writing;
