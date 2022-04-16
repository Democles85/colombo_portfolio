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
            of the body can be released. It often decreases or even removes
            pain.{' '}
          </P>
        </Box>
        <Box>
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
            therapies such as Rolfing, Bowen Technique, Shiatsu, and
            Craniosacral Therapy.
          </P>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
