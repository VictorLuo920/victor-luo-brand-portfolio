import { Flex, Icon } from '@chakra-ui/react';

import CTAGroup from '~/lib/components/samples/CTAGroup';
import ShortBio from '~/lib/components/samples/ShortBio';
import SocialLinks from '~/lib/components/samples/SocialLinks';

const AvatarIcon = () => {
  return (
    <Icon viewBox="0 0 209 256" boxSize="150px">
      <path
        fill="currentColor"
        d="M99.767,2c13.73,0,24.861,11.131,24.861,24.861s-11.131,24.861-24.861,24.861c-13.73,0-24.861-11.131-24.861-24.861
S86.037,2,99.767,2z M153.535,116.134c1.393-2.019,2.214-4.481,2.227-7.15c0.031-6.83-4.931-12.658-11.742-12.748l-7.911-21.097
l-6.348,2.38l7.018,18.716L94.605,96.27c0.057,0.16-12.833-36.916-14.535-40.943c-3.313-7.84-9.761-12.885-18.171-12.387
c-11.462,0.679-19.185,10.438-23.154,21.213c-7.911,21.471-13.56,57.632-11.269,81.116c1.062,9.392,3.37,17.339,8.67,21.95H17.785
V96.27H2.018V254h15.766v-71.015h75.663l-10.719,53.348c-1.605,7.954,3.541,15.702,11.494,17.308
c0.981,0.198,1.959,0.294,2.923,0.294c6.849,0,12.977-4.815,14.385-11.787l9.377-46.67l12.323,33.046
c2.204,5.91,7.809,9.562,13.767,9.562c1.705,0,3.44-0.299,5.131-0.93c7.602-2.835,11.467-11.295,8.632-18.897l-25.756-69.072
c-2.143-5.748-7.632-9.558-13.765-9.558H80.85v-7.815h110.365v122.122h15.766v-137.8H153.535z"
      />
    </Icon>
  );
};

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
      <AvatarIcon />
      <ShortBio />
      <SocialLinks />
      <CTAGroup />
    </Flex>
  );
};

export default Home;
