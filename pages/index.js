import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/pentakill.jpg'
import thumbInkdrop from '../public/images/works/shoppocles_thumbnail.png'

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m...
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Name Surname
          </Heading>
          <p>Specialized Profession</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/icon.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <Paragraph>Colombo.</Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              What I offer
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Year 1</BioYear>
          Filler Content
        </BioSection>
        <BioSection>
          <BioYear>Year 2</BioYear>
          Filler Content
        </BioSection>
        <BioSection>
          <BioYear>Year 3</BioYear>
          Filler Content
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>What you love doing?</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Where to find me
        </Heading>
        <List>
          {/* <ListItem>
            <Link href="https://github.com/Democles85" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Democles85
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://twitter.com/LeJhin1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/LeJhin1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Facebook
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/sixheitartari/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/watch?v=O0RKS9592-s"
            title="Fav Song of the Month"
            thumbnail={thumbYouTube}
          >
            My Favorite Song Of The Month
          </GridItem>
          <GridItem
            href="https://shoppocles.netlify.app/"
            title="Shoppocles"
            thumbnail={thumbInkdrop}
          >
            An E-Commerce website for buying different products
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              Testimonies
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
