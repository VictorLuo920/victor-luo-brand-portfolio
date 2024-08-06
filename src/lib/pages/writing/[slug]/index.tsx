import { Flex, Stack, Grid, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import supabase from '../../../utils/supabase';
import { slugToStr, formatDate } from '~/lib/utils/helperFunctions';

const Post = async ({ params }: { params: { slug: string } }) => {
  const { data: post, error } = await supabase
    .from('posts')
    .select()
    .eq('title', `${slugToStr(params.slug)}`);

  return post ? (
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
        <Text fontSize="md" whiteSpace="pre-line" textAlign="initial" mb={4}>
          {post[0]?.content}
        </Text>
        <Text
          fontSize="xs"
          textAlign="initial"
          mb={4}
        >{`published on ${formatDate(post[0]?.created_at)}`}</Text>
      </Grid>
      <Stack gap={4} w={{ base: '100%', md: '75%' }}>
        <Button variant="outline" as={Link} href="/">
          Home Page
        </Button>
        <Button as={Link} href="/writing">
          My Writing
        </Button>
      </Stack>
    </Flex>
  ) : (
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
          No post here!
        </Heading>
        <Text fontSize="md" whiteSpace="pre-line" textAlign="initial" mb={4}>
          Cannot find this post!
        </Text>
      </Grid>
      <Stack gap={4} w={{ base: '100%', md: '75%' }}>
        <Button variant="outline" as={Link} href="/">
          Home Page
        </Button>
        <Button as={Link} href="/writing">
          My Writing
        </Button>
      </Stack>
    </Flex>
  );
};

export default Post;
