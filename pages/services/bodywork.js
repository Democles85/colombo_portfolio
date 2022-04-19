import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title } from '../../components/service'
import P from '../../components/paragraph'

const Bodywork = () => {
  return (
    <Layout>
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
          <Title>Bodywork</Title>
          <Box pb={5}>
            <Heading as="h3" my={4} fontSize={20}>
              A brief explanation of how de-armouring came to life.
            </Heading>
            <P>
              The modern term ‘de-armouring’ evolved from the work of the
              psychoanalyst Wilhelm Reich in the 1930s. He noticed that when his
              patients carried emotions or ideas which had been repressed over
              time, they formed a ‘character armour.’ This consisted of certain
              traits which were present to defend themselves from feeling the
              unwanted emotions.
            </P>
            <br />
            <P>
              Reich then observed that this character armour corresponded to a
              somatic (physical body) ‘armour,’ which consisted of the hardening
              of the body’s soft tissues, such as muscles. Over time, the armour
              hardened, causing the physical body to become less sensitized and
              feel less of both pain and pleasure.
            </P>
            <br />
            <P>
              Reich found that the armour could be softened by applying certain
              bodywork techniques. Today, his work overlaps with body-based
              therapies.
            </P>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default Bodywork
