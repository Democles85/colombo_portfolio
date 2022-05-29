import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/testimonial_paragraph'
import Section from '../../components/section'
import { Title } from '../../components/service'

const DeArmouring = () => {
  const DeArmouringImage = '/images/works/thumb_3.jpeg'
  const colorValue = useColorModeValue('#202020', '#fcb03b')
  return (
    <Layout title="De-Armouring">
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
            “If we are simply an extension of the universe then surely we also
            pulsate, contract and expand. Not long after our birth / contraction
            (or expansion depending how you see it) our muscles begin holding
            memory of our traumas and create muscular rigidities that soon
            design our personal &lsquo;suit of armour&lsquo;. This suit of armor
            interrupts our pulsation / energetic flow reducing our true
            expression of Self and blocking or hindering our creative and
            life-force.”{' '}
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
            <Paragraph>
              De-armouring opens up the energy flow and the connection between
              mind and body. This way, blockages and stuck trauma in the tissues
              of the body can be released. It decreases and even removes pain.{' '}
            </Paragraph>
            <Heading as="h3" my={4} fontSize={20} variant="service-title">
              A brief explanation of De-Armouring.
            </Heading>
            <Paragraph>
              Detoxifying our bodies of negative emotions, is one of the kindest
              things that we can do for ourselves.
            </Paragraph>
            <Paragraph>
              Before birth are bodies are in bliss and pleasure. This is our
              natural state. As fear and trauma happens, our cellular vibration
              moves from bliss, into emotion, into pain, and into numbness
              (non-feeling).
            </Paragraph>
            <Paragraph>
              Physical, mental, and emotional trauma&apos;s, are all stored in
              the bodies tissue. When the body is unable to release trauma it
              can effects us in a number of ways.
            </Paragraph>
            <Paragraph>
              An emotional detox and de-armouring session, is about reversing
              this process. Taking our cellular memory back to a place of love
              and joy, and vibrating on this level again.
            </Paragraph>
            <Paragraph>
              Prevention is always better than cure, but if trauma in the body
              does start to manifest as physical, mental, or emotional problems,
              then conventional medicine, alternative medicine, and talking
              therapies are only part of the answer. You still need to get the
              trauma out of the body.
            </Paragraph>
            <Paragraph>
              Many people can achieve in several sessions of de-armouring, what
              it can take several years to accomplish in talking therapy.
            </Paragraph>
            <Paragraph>
              In a session, I help you access this trauma, or pain, by using a
              range of techniques, including:
              <List py={2} pl={5}>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Breathwork
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Trauma Release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Emotional Release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  De-Armouring
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Pressure points for different energy systems
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Chakra Cleansing
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Aura Cleansing
                </ListItem>
              </List>
              and other tools, to help you access and release old emotional
              pain, and stuckness.
            </Paragraph>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default DeArmouring
