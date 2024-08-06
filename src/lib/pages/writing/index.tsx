import {
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Link from 'next/link';

import supabase from '../../utils/supabase';
import { strToSlug, formatDate } from '~/lib/utils/helperFunctions';

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
      <Grid textAlign="center" gap={4}>
        <Heading as="h1" size="4xl" mb={4}>
          My Writing
        </Heading>

        <Text fontSize="md" textAlign="initial">
          Here you&apos;ll find my writing on various topics like writing,
          teaching, and technology
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Post Title</Th>
                <Th>Published On</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts?.map((post) => {
                return (
                  <Tr key={post.id}>
                    <Td>
                      <Link href={`/writing/${strToSlug(post.title)}`}>
                        {post.title}
                      </Link>
                    </Td>
                    <Td>{formatDate(post.created_at)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>
      <Button as={Link} href="/" w={{ base: '100%', md: '75%' }}>
        Home Page
      </Button>
    </Flex>
  );
};

export default Writing;
