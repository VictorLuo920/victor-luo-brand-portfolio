import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="xl">
        Victor Luo
      </Heading>

      <Text fontSize="md">Some profile text highlighting who I am</Text>
    </Grid>
  );
};

export default SomeText;
