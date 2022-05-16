import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBodywork from '../public/images/works/thumb_1.jpeg'
import thumbAuthenticTantra from '../public/images/works/thumb_2.jpeg'
import thumbDeArmouring from '../public/images/works/thumb_3.jpeg'
import thumbSoundHealing from '../public/images/works/thumb_6.jpeg'
import thumbAdvancedEnergeticBodywork from '../public/images/works/thumb_5.jpeg'
import thumbComingSoon from '../public/images/works/coming_soon_thumb.png'

const Services = () => (
  <Layout title="Services">
    <Container>
      {/* Bodywork / Section 1 */}

      <SimpleGrid columns={[1, 1, 1]}>
        <Section>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            color={useColorModeValue('#202023', '#fcb03b')}
          >
            Bodywork
          </Heading>

          <WorkGridItem
            id="bodywork"
            title="Bodywork"
            thumbnail={thumbBodywork}
          >
            Bodywork is a collective term that refers to alternative medical
            practices involving hands-on manipulation of the body...
          </WorkGridItem>
        </Section>
        <Divider my={6} />

        <Section delay={0.2}>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            color={useColorModeValue('#202023', '#fcb03b')}
          >
            De Armouring
          </Heading>
          <WorkGridItem
            id="de-armouring"
            title="De Armouring"
            thumbnail={thumbDeArmouring}
          >
            De-armouring is a way to release jams, stagnant energy, emotions and
            tension from the body...
          </WorkGridItem>
        </Section>
        <Divider my={6} />

        <Section delay={0.4}>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            color={useColorModeValue('#202023', '#fcb03b')}
          >
            Authentic Tantra
          </Heading>
          <WorkGridItem
            id="authentic-tantra"
            title="Authentic Tantra"
            thumbnail={thumbAuthenticTantra}
          ></WorkGridItem>
        </Section>
        <Divider my={6} />

        <Section delay={0.6}>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            color={useColorModeValue('#202023', '#fcb03b')}
          >
            Sound Healing
          </Heading>
          <WorkGridItem
            id="sound-healing"
            title="Sound Healing"
            thumbnail={thumbSoundHealing}
          >
            Sound has the ability to activate parts of the subconscious brain,
            which can give access to unconscious memories...
          </WorkGridItem>
        </Section>
        <Divider my={6} />

        <Section delay={0.8}>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            color={useColorModeValue('#202023', '#fcb03b')}
          >
            Advanced Energetic Bodywork
          </Heading>
          <WorkGridItem
            id="advanced-energetic-bodywork"
            title="Advanced Energetic Bodywork"
            thumbnail={thumbAdvancedEnergeticBodywork}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* Works | Section 2 */}
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Sound Healing
      </Heading>

      <Section delay={0.8}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          More Coming Soon...
        </Heading>
      </Section> */}
    </Container>
  </Layout>
)

export default Services
