import { Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import supabase from '../../utils/supabase';
import { strToSlug } from '~/lib/utils/helperFunctions';

const Writing = async () => {
  const { data: posts, error } = await supabase.from('posts').select('*');

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

        {posts?.map((post) => {
          return (
            <Link key={post.id} href={`/writing/${strToSlug(post.title)}`}>
              {post.title}
            </Link>
          );
        })}
      </Grid>
      <Button as={Link} href="/">
        Home Page
      </Button>
    </Flex>
  );
};

export default Writing;
