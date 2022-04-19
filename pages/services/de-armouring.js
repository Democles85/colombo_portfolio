import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { Title } from '../../components/service'

const Work = () => {
  return (
    <Layout title="De-Armouring">
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
            “If we are simply an extension of the universe then surely we also
            pulsate, contract and expand. Not long after our birth / contraction
            (or expansion depending how you see it) our muscles begin holding
            memory of our traumas and create muscular rigidities that soon
            design our personal &lsquo;suit of armour&lsquo;. This suit of armor
            interrupts our pulsation / energetic flow reducing our true
            expression of Self and blocking or hindering our creative and
            (life-force).”{' '}
          </Text>
        </Box>
      </Section>
      <Section>
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
      </Section>
    </Layout>
  )
}

export default Work
