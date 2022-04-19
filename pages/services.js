import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBodywork from '../public/images/works/bodywork_thumbnail.jpg'
import thumbDeArmouring from '../public/images/works/de_armoring_thumbnail.png'
import thumbTantricDeArmouring from '../public/images/works/tantric_de_armouring_thumbnail.jpg'
import thumbSoundHealing from '../public/images/works/sound_healing_thumbnail.jpg'
import thumbComingSoon from '../public/images/works/coming_soon_thumb.png'
import thumbDemoclesNews from '../public/images/works/democles_news_thumnail.png'
import thumbMathsGame from '../public/images/works/maths_game_thumbnail.png'
import thumbCalculator from '../public/images/works/calculator_thumbanil.png'
import thumbRSAProject from '../public/images/works/rsa_algorithm_thumbnail.jpg'

const Services = () => (
  <Layout title="Services">
    <Container>
      {/* Bodywork / Section 1 */}
      <Heading as="h3" fontSize={20} mb={4}>
        Bodywork
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="bodywork"
            title="Bodywork"
            thumbnail={thumbComingSoon}
          >
            Bodywork is a collective term that refers to alternative medical
            practices involving hands-on manipulation of the body...
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="authentic-tantra"
            title="Authentic Tantra"
            thumbnail={thumbComingSoon}
          >
            De-armouring is a way to release jams, stagnant energy, emotions and
            tension from the body...
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="de-armouring"
            title="De Armouring"
            thumbnail={thumbComingSoon}
          >
            De-armouring is a way to release jams, stagnant energy, emotions and
            tension from the body...
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Sound Healing
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="sound-healing"
              title="Sound Healing"
              thumbnail={thumbSoundHealing}
            >
              Sound has the ability to activate parts of the subconscious brain,
              which can give access to unconscious memories...
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
      {/* Works | Section 2 */}
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Sound Healing
      </Heading> */}

      {/* Final Section | Section 4 */}
      <Section delay={0.8}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          More Coming Soon...
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Services
