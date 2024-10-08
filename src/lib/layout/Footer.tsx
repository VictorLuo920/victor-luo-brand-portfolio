import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} - <Link href="/">Victor Luo</Link>
      </Text>
    </Flex>
  );
};

export default Footer;
