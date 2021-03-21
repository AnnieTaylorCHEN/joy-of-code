import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'
import { Subheading, Title } from '@/root/components/shared/Typography'
import { CardGrid } from '@/root/components/ui/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'

import { Newsletter } from '../../shared/Newsletter'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export function Home({ posts }: Props) {
  return (
    <Layout>
      <Box maxW={{ sm: '60%', lg: '80%' }} mx="auto" px={{ base: 8, sm: 0 }}>
        <Box>
          <Title>
            Welcome Friend
            <Emoji emoji="👋" label="Waving hand emoji" animate />
          </Title>
        </Box>

        {posts.length < 1 && (
          <Box fontSize={[16, 18, 20]} my={8}>
            Nothing to see here...
            <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
          </Box>
        )}

        <Newsletter maxW="420px" my={8} />

        <Box my={{ base: 8, md: 12 }}>
          <Subheading mt={0}>
            <Emoji emoji="🔥" label="Fire emoji" spacing={2} />
            Latest
          </Subheading>
          <CardGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}
