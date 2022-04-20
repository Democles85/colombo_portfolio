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

const DeArmouring = () => {
  const DeArmouringImage = '/images/works/thumb_3.jpeg'
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
            fontWeight={'medium'}
            fontSize={[18, null, 20]}
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
            src={DeArmouringImage}
            alt="De Armouring"
            borderRadius={'lg'}
          />
        </Box>

        <Container>
          <Box py={5}>
            <Title>De-Armouring</Title>
            <Heading as="h3" my={4} fontSize={20} variant="service-title">
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

export default DeArmouring
