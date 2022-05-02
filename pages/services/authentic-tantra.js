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
import P from '../../components/paragraph'
import Section from '../../components/section'
import { Title } from '../../components/service'

const AuthenticTantra = () => {
  const AuthenticTantraImage = '/images/works/thumb_2.jpeg'
  return (
    <Layout title="Authentic Tantra">
      <Section delay={0.2}>
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
            fontWeight={'medium'}
            fontSize={[18, null, 20]}
            letterSpacing="tight"
          >
            “Tantra Massage is an energy form of massage first and foremost. Key
            energy channels are purified, energy centers are activated and
            innate energy sources are channeled in a specific way.”{' '}
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
            src={AuthenticTantraImage}
            alt="Authentic Tantra"
            borderRadius={'lg'}
          />
        </Box>
        <Container>
          <Box py={5}>
            <Title>Authentic Tantra</Title>
            {/* <Heading as="h3" my={4} fontSize={20} variant="service-title">
              What is authentic tantra?
            </Heading>
            <P>
              Tantra Massage is an energy form of massage first and foremost.
              Key energy channels are purified, energy centers are activated and
              innate energy sources are channeled in a specific way.
            </P> */}
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default AuthenticTantra
