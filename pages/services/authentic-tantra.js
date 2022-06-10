import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
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
            <Heading as="h3" my={4} variant="highlight">
              What is tantra, in simpler terms?
            </Heading>
            <Paragraph>
              Tantra massages is one if the mos refined and sensitive forms of
              art. It requires a high consciousness, as it requires the presence
              of soft and intensive energy, flowing within you, taking you deep
              within experiences and subconsciousness, in order to understand
              what your being is saying. Tantra is a vivid experience of our own
              energy, to help us evolve spiritually.
            </Paragraph>
            <Heading as="h3" my={4} variant="highlight">
              What is tantra today, and how many tantra models are there?
            </Heading>
            <Paragraph>
              You will find many tantric models, created from various
              therapists, heavily involved in the tantric arts. After all of
              their work with themselves and many lessons, they keep all of
              their wisdom in the models they created. Naturally, another part
              of it integrate other types of body work, creating an authentic
              model in their own way.
            </Paragraph>
            <Heading as="h3" my={4} variant="highlight">
              On another aspect:
            </Heading>
            <Paragraph>
              Tantrism is not a theory or a system of thought. It&apos;s a sound
              science of the body. Of course, the practice of the physical also
              includes a spiritual, cosmological context. Tantra is first and
              foremost an empirical science of the body. At the same time it is
              a consciousness teaching, it depends on the quality of
              consciousness in every aspect. It contains practices and methods
              by which one can get into very specific states. So it is a work
              with the energies of the body, with the life energy. The basis is
              a very fine, highly differentiated system that makes up the subtle
              currents in the human body and how they can be channeled.”
            </Paragraph>
            <Heading as="h3" my={4} variant="highlight">
              Where is tantric bodywork based on for me?
            </Heading>
            <Paragraph>
              After my observations on history and a lot of teachers of tantric
              energy, as well as self exploration and bodywork on others, i have
              created an authentic model. It is rooted on tantric energy and
              life force, making it suitable for all who had a tantric session.
              This session is properly created for those who have had previous
              therapy sessions and for those retaking a session from me, so I
              may keep a proper vividness within your soul.
            </Paragraph>
            <Heading as="h3" my={4} variant="highlight">
              How does it work?
            </Heading>
            <Paragraph>
              It remains quite amazing and helpful on how tantric work attracts
              all the senses, focusing on subconscious touch. It is an extension
              of the subconscious, by directly ans intensively connecting all
              our emotions with the invisible energy structures. In order to
              help heal tensions and traumas, we express ourselves through a
              direct and connected energy massage. It is both intimate and it
              touches our body ans soul, helping us connect on a deeper level
              with ourselves.
            </Paragraph>
            <Heading as="h3" my={4} variant="highlight">
              The benefits of tantric therapy.
            </Heading>
            <OrderedList py={2} pl={5}>
              <ListItem py={1}>
                <Paragraph>
                  Reduction if mental and emotional stress, allowing for a
                  clearer mind and getting rid of negative thinking patterns.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  It allows for greater sensitivity towards the delicate flow of
                  energy, helping us to rid ourselves of energy blocks.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  It unblocks our energetic body, making it more sensitive,
                  helping you find things more vividly.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  It opens the gates to our subconsciousness, immersing you into
                  who you are.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  Broadens your subconsciousness, letting more universal energy
                  flow through.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  Connects you more to the center of your heart.
                </Paragraph>
              </ListItem>
              <ListItem py={1}>
                <Paragraph>
                  It serves as a trampoline into the spiritual tantric world,
                  and it grows the our desire for more insight into the world
                  deep within us. It creates a deep foundation to support your
                  body and mind, but it also introduces you to new and
                  unbelievable things. This is a different experience for
                  everyone.
                </Paragraph>
              </ListItem>
            </OrderedList>
            {/* <Heading as="h3" my={4} variant="highlight">
              What is authentic tantra?
            </Heading>
            <Paragraph>
              Tantra is a vast metaphysical system, unrelated to any religion,
              which originated in India and Tibet many centuries ago. This very
              scientific, comprehensive system gives the human being a gateway
              into the structure of reality and a practical understanding of the
              basic laws of the universe, in essence providing us the bases for
              development as human beings. First and foremost, Tantra is a path
              to spiritual evolution.
            </Paragraph> */}
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default AuthenticTantra
