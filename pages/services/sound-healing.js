import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/service'
import P from '../../components/paragraph'

const SoundHealing = () => {
  return (
    <Layout>
      <Container>
        <Title>Sound Healing</Title>
        {/* Section 1 */}
        <Box pb={5}>
          <Heading as="h3" fontSize={20} my={4}>
            Sound is more than vibrations
          </Heading>
          <P>
            The physical body is fully penetrated by an energy body – which is a
            body of frequencies and vibrations, a bit bigger than the physical
            body itself. Every time we get a shock, which we do not react
            actively to, energy gets stuck and freezes in tissues and cells.
          </P>
          <br />
          <P>
            Sound is made up of vibrations and frequencies. Sound can melt old
            frozen energy through the use of various tones, vowels and mantras
            via the vibration resonating with the exact frequency in the tissue
            of a blocked area. This resonance will create movement and will make
            the energy flow.
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
            fontWeight={['light', null, 'medium']}
            fontSize={[16, null, 18]}
            letterSpacing="tight"
          >
            “Sound can melt old frozen energy via the vibrations”{' '}
          </Text>
        </Box>

        {/* Section 2 */}
        <Box pb={5}>
          <Heading as="h3" fontSize={20} my={4}>
            The power of sound
          </Heading>
          <P>
            Sound has the ability to activate parts of the subconscious brain,
            which can give access to unconscious memories.
          </P>
          <br />
          <P>
            The use of sound in The Gaia Method is performed either by the
            practitioner, the client or both. It can also come in the form of
            tuning forks or singing bowls.
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
            fontWeight={['light', null, 'medium']}
            fontSize={[16, null, 18]}
            letterSpacing="tight"
          >
            “Sound has the ability to activate parts of the subconscious brain”{' '}
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default SoundHealing
