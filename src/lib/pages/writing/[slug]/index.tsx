import { Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import supabase from '../../../utils/supabase';
import { slugToStr } from '~/lib/utils/helperFunctions';

const Post = async ({ params }: { params: { slug: string } }) => {
  const { data: post, error } = await supabase
    .from('posts')
    .select()
    .eq('title', `${slugToStr(params.slug)}`);

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
          {post[0]?.title}
        </Heading>

        <Text fontSize="md" textAlign="initial">
          {post[0]?.content}
        </Text>
      </Grid>
      <Button as={Link} href="/">
        Home Page
      </Button>
    </Flex>
  );
};

export default Post;
