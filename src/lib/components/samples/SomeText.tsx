import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="4xl" mb={4}>
        Victor Luo
      </Heading>

      <Text fontSize="md">
        I&apos;m a writer, an educator, and an indepdendent creative full-stack
        developer based in Los Angeles. I&apos;m passioniate about building
        communities and experiences that promote learning and artistic
        collaboration.
      </Text>
    </Grid>
  );
};

export default SomeText;
