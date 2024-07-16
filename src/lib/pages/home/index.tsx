import { Flex } from '@chakra-ui/react';

import CTAGroup from '~/lib/components/samples/CTAGroup';
import ShortBio from '~/lib/components/samples/ShortBio';
import SocialLinks from '~/lib/components/samples/SocialLinks';

const Home = () => {
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
      <ShortBio />
      <SocialLinks />
      <CTAGroup />
    </Flex>
  );
};

export default Home;
