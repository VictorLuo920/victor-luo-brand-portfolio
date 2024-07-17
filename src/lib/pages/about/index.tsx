import { Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const About = () => {
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
          About Me
        </Heading>

        <Text fontSize="md" textAlign="initial">
          Placeholder Text for About Me Page
        </Text>
      </Grid>
      <Button as={Link} href="/">
        Home Page
      </Button>
    </Flex>
  );
};

export default About;
