import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { BsFillCircleFill } from 'react-icons/bs'
import React from 'react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const About = () => {
  const colorValue = useColorModeValue('#202020', '#fcb03b')
  const aboutMeImage = '/images/works/thumb_4.jpeg'
  return (
    <Layout title="About Me">
      <Section>
        <Box
        // borderRadius="10px"
        // background={useColorModeValue('#fcb03b', '#202023')}
        // boxShadow={`5px 5px 10px ${useColorModeValue(
        //   '#7c561d',
        //   '#0d0d0e'
        // )}, -5px -5px 10px ${useColorModeValue('#ffc980', '#333338')}`} //Can do inset for pressed
        // padding={[2, 3]}
        >
          <Image
            loading="lazy"
            src={aboutMeImage}
            alt="Sound Healing"
            borderRadius={'lg'}
          />
        </Box>
        <Container>
          <Box display={{ md: 'flex' }} py={5}>
            <Box flexGrow={1}>
              <Heading
                as="h2"
                variant="page-title"
                color={useColorModeValue('#202023', '#fcb03b')}
              >
                Hello
              </Heading>
              <p>I&apos;m Colombo</p>
            </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/colombo.jpg"
                alt="Profile Image"
              />
            </Box>
          </Box>
          <Section delay={0.2}>
            <Box py={5}>
              <Heading
                as="h3"
                variant="section-title"
                color={useColorModeValue('#202023', '#fcb03b')}
              >
                I&apos;m a Therapist
              </Heading>
              <Paragraph>
                Who has an experience and passion in working in the field of
                Alternative Healing to support people through the different
                levels of modalities, such as: <b>Physical</b>, <b>Mental</b>,{' '}
                <b> Emotional</b> and <b>Spiritual</b>.
              </Paragraph>
            </Box>

            {/* <Box py={5}>
              <Heading
                as="h3"
                variant="section-title"
                color={useColorModeValue('#202023', '#fcb03b')}
              >
                I have
              </Heading>
              <Paragraph>
                Expertise in energetically observing what you have been going
                through and very quickly finding the wounds that need healing.
              </Paragraph>
            </Box>

            <Box pt={5} pb={10}>
              <Heading
                as="h3"
                variant="section-title"
                color={useColorModeValue('#202023', '#fcb03b')}
              >
                My
              </Heading>
              <Paragraph>
                Personal life is my own testing laboratory for a living souls’
                state and transformation.
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
                Inside me I hold
              </Text>{' '}
              The ability to see through the traumas, and into your higher self!
            </Box> */}
          </Section>
        </Container>
      </Section>
    </Layout>
  )
}

export default About
