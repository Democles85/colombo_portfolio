import {
  Box,
  Container,
  Heading,
  Image,
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
            <Heading as="h3" my={4} fontSize={20}>
              What is authentic tantra?
            </Heading>
            <P>
              Tantra Massage is an energy form of massage first and foremost.
              Key energy channels are purified, energy centers are activated and
              innate energy sources are channeled in a specific way.
            </P>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default AuthenticTantra
