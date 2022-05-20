import NextLink from 'next/link'
import { Box, Button, useColorModeValue, Text, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Section>
      <Box
        textStyle="h1"
        borderRadius="lg"
        p={5}
        background="rgba(245,166,35,0.25)"
        boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
      >
        <Text
          color={useColorModeValue('#202020', '#eeeeee')}
          fontWeight={['medium', null, 'bold']}
          fontSize={[18, null, 24]}
          letterSpacing="tight"
        >
          “Do not try to find your home by seeking light, all darkness inside
          and outside the Universe is part of it.”{' '}
          <Text
            color={useColorModeValue('#202023', '#fff')}
            fontSize="lg"
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="light"
            textAlign="right"
          >
            – Colombo
          </Text>
        </Text>
      </Box>
    </Section>

    <Section delay={0.5}>
      <Box>
        <Image
          loading="lazy"
          src="/images/works/home_thumbnail.jpg"
          alt="De Armouring"
          borderRadius={['8px', '5px']}
          // boxShadow="0px 0px 25px 25px rgba(0, 0, 0, 0.25)"
        />
      </Box>
      <Box align="center" my={4}>
        <NextLink href="/services">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
            Services
          </Button>
        </NextLink>
      </Box>
    </Section>
  </Layout>
)

export default Home
