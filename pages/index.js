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
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
            color={useColorModeValue('#fcb03b', '#fcb03b')}
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
      <Box
        borderRadius="20px"
        background={useColorModeValue('#fcb03b', '#202023')}
        boxShadow={`5px 5px 10px ${useColorModeValue(
          '#7c561d',
          '#0d0d0e'
        )}, -5px -5px 10px ${useColorModeValue('#ffc980', '#333338')}`} //Can do inset for pressed
        padding={[2, 3]}
      >
        <Image
          loading="lazy"
          src="/images/works/home_thumbnail.jpg"
          alt="De Armouring"
          borderRadius="20px"
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
