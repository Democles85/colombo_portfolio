import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const About = () => {
  return (
    <Layout title="About Me">
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hello
            </Heading>
            <p>I&apos;m Colombo</p>
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
              src="/images/colombo.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.2}>
          <Box py={5}>
            <Heading as="h3" variant="section-title">
              My life long passions are
            </Heading>
            <Paragraph>
              Healing through deep emotional release, understanding of the Human
              condition, transformation and transmutation of shadow aspects into
              light. Withing my work I focus on a direct and intense experience
              of life as a way of bringing that transformation alive.
            </Paragraph>
          </Box>

          <Box py={5}>
            <Heading as="h3" variant="section-title">
              I have
            </Heading>
            <Paragraph>
              A lot of experience in dealing with the scars and wounds of life,
              and am skilled in holding a deep space of Love; understanding how
              important it is to work within a strong container of love while
              doing transformational work.
            </Paragraph>
          </Box>

          <Box pt={5} pb={10}>
            <Heading as="h3" variant="section-title">
              My
            </Heading>
            <Paragraph>
              Own life is my personal laboratory of the human condition and
              transformation, and I continuously and relentlessly work and
              experiment on myself.
            </Paragraph>
          </Box>

          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Text
              color={useColorModeValue('#202023', '#fcb03b')}
              fontWeight="bold"
            >
              Within me I hold both ends of the spectrum:
            </Text>{' '}
            The ability to empathize and to hold you gently while the emotional
            storm is happening within you.
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
