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
      <Grid textAlign="center" mb={8}>
        <Heading as="h1" size="4xl" mb={4}>
          About Me
        </Heading>

        <Text fontSize="md" textAlign="initial" mb={4}>
          At the heart of all my work is the love for storytelling. I think
          about story in all my work, whether as a writer writing fiction,
          essays and human-interest stories, as a teacher teaching literature,
          writing, and technology, or as a developer building technical
          solutions and web experiences that power and promote mission-driven
          business and social impact.
        </Text>
        <Text fontSize="md" textAlign="initial" mb={4}>
          I&apos;ve lived in Los Angeles all my life and I&apos;ve always loved
          it as a city of creatives filled with dreams and stories of people
          reinventing themselves and shaping the world around them. My career in
          tech started with learning the foundations of web development at
          General Assembly&apos;s Software Engineering Immersive in March 2020,
          right at the beginning of the COVID-19 Pandemic and the nature of work
          changed around the world. It was an immensely challenging but
          fascinating and satisfying experience learning to code while under the
          pressures to adapt to rapidly changing world, inspired by the way
          technology became even more essential to keeping people connected.
        </Text>
        <Text fontSize="md" textAlign="initial" mb={4}>
          USC and UC Davis was where I studied with some of the best writers who
          inspired me to work on great stories myself. Post-college, I explored
          a variety of work opportunities and experiences, working in education
          and marketing roles as well as studying and performing in the local
          improv comedy and standup scene. Today, you can find me roaming all
          over Los Angeles forging and fostering my connections to the LGBT
          community and my queer family and diving into wide range of creative
          projects.
        </Text>
      </Grid>
      <Button as={Link} href="/">
        Home Page
      </Button>
    </Flex>
  );
};

export default About;
