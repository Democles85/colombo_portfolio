import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title } from '../../components/service'

const authenticTantra = () => {
  return (
    <Layout title="Authentic Tantra">
      <Container>
        <Title>Authentic Tantra</Title>
        <Box pb={5}>
          <Heading as="h3" my={4} fontSize={20}>
            What is authentic tantra?
          </Heading>
          <P>
            Tantra Massage is an energy form of massage first and foremost. Key
            energy channels are purified, energy centers are activated and
            innate energy sources are channeled in a specific way.
          </P>
        </Box>
      </Container>
    </Layout>
  )
}

export default authenticTantra
