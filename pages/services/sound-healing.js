import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/service'
import P from '../../components/paragraph'
import Section from '../../components/section'

const SoundHealing = () => {
  const SoundHealingImage = '/images/works/thumb_6.jpeg'
  return (
    <Layout title="Sound Healing">
      <Section>
        <Box
          textStyle="h1"
          borderRadius="lg"
          p={5}
          // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          background="rgba(245,166,35,0.25)"
          boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
          border="1px solid rgba(255,255,255, 0.18)"
        >
          <Text
            color={useColorModeValue('#202020', '#eeeeee')}
            fontWeight={['medium', null, 'bold']}
            fontSize={[18, null, 24]}
            letterSpacing="tight"
          >
            “Sound is the medicine of the future.”{' '}
            <Text
              color={useColorModeValue('#fcb03b', '#fcb03b')}
              fontSize="lg"
              fontFamily="M PLUS Rounded 1c, sans-serif"
              fontWeight="light"
              textAlign="right"
            >
              – Edgar Cayce
            </Text>
          </Text>
        </Box>
      </Section>
      <Section delay={0.3}>
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
            src={SoundHealingImage}
            alt="Sound Healing"
            borderRadius={'lg'}
          />
        </Box>

        <Container>
          {/* Section 1 */}
          <Box py={5}>
            <Title>Sound Healing</Title>
            <Heading as="h3" fontSize={20} my={4} variant="service-title">
              Sound is more than vibrations
            </Heading>
            <P>
              The physical body is fully penetrated by an energy body – which is
              a body of frequencies and vibrations, a bit bigger than the
              physical body itself. Every time we get a shock, which we do not
              react actively to, energy gets stuck and freezes in tissues and
              cells.
            </P>
            <br />
            <P>
              Sound is made up of vibrations and frequencies. Sound can melt old
              frozen energy through the use of various tones, vowels and mantras
              via the vibration resonating with the exact frequency in the
              tissue of a blocked area. This resonance will create movement and
              will make the energy flow.
            </P>
          </Box>
          <Box
            textStyle="h1"
            borderRadius="lg"
            p={3}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Text
              color={useColorModeValue('#fcb03b', '#fcb03b')}
              fontWeight="medium"
              fontSize={[16, null, 18]}
              textAlign="justify"
              letterSpacing="tight"
            >
              “Sound can melt old frozen energy via the vibrations”{' '}
            </Text>
          </Box>

          {/* Section 2 */}
          <Box pb={5}>
            <Heading as="h3" fontSize={20} my={4} variant="service-title">
              The power of sound
            </Heading>
            <P>
              Sound has the ability to activate parts of the subconscious brain,
              which can give access to unconscious memories.
            </P>
          </Box>
          <Box
            textStyle="h1"
            borderRadius="lg"
            p={3}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Text
              color={useColorModeValue('#fcb03b', '#fcb03b')}
              fontWeight="medium"
              fontSize={[16, null, 18]}
              letterSpacing="tight"
              textAlign="justify"
            >
              “Sound has the ability to activate parts of the subconscious
              brain”{' '}
            </Text>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default SoundHealing
