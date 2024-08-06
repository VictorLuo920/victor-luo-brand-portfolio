import { Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import {
  WriterIcon,
  ReaderIcon,
  CoderIcon,
  ExplorerIcon,
} from '~/lib/components/icons/icons';

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
      <Grid textAlign="center" mb={8}>
        <Heading as="h1" size="4xl" mb={4}>
          About Me
        </Heading>

        <Flex gap={4} alignItems="center" justifyContent="center" mb={4}>
          <WriterIcon />
          <ReaderIcon />
          <CoderIcon />
          <ExplorerIcon />
        </Flex>

        <Text fontSize="md" whiteSpace="pre-line" textAlign="initial" mb={4}>
          At the heart of my work is a love for storytelling. Whether writing
          fiction, essays, and human-interest stories, teaching literature,
          writing, and technology, or developing technical solutions and web
          experiences that maximize mission-driven social impact, storytelling
          is my core focus that fuels my passion.
        </Text>
        <Text fontSize="md" textAlign="initial" mb={4}>
          I&apos;ve lived in Los Angeles all my life, a city of creatives filled
          with dreams and stories of innovation. My tech career began at General
          Assembly&apos;s Software Engineering Immersive in March 2020, during
          the onset of the COVID-19 pandemic. It was a challenging but rewarding
          experience to learn coding amidst a rapidly changing world, inspired
          by how technology became essential for keeping people connected.
        </Text>
        <Text fontSize="md" textAlign="initial" mb={4}>
          At USC and UC Davis, I studied with some of the best writers,
          inspiring me to create great stories. After college, I explored
          various roles in education and marketing and immersed myself in the
          local improv comedy and stand-up scene. Today, you can find me all
          over Los Angeles, connecting with the LGBT community and my queer
          family, and diving into a wide range of creative projects.
        </Text>
      </Grid>
      <Button as={Link} href="/" w={{ base: '100%', md: '75%' }}>
        Home Page
      </Button>
    </Flex>
  );
};

export default About;
