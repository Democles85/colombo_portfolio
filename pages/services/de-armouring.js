import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title } from '../../components/service'

const Work = () => {
  return (
    <Layout title="De-Armouring">
      <Container>
        <Title>De-Armouring</Title>
        <Box pb={5}>
          <Heading as="h3" my={4} fontSize={20}>
            What does De-Armouring accomplish?
          </Heading>
          <P>
            De-armouring opens up the energy flow and the connection between
            mind and body. This way, blockages and stuck trauma in the tissues
            of the body can be released. It decreases and even removes pain.{' '}
          </P>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
