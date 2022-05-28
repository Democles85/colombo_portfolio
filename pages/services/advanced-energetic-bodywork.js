import {
  Box,
  Container,
  Text,
  Image,
  useColorModeValue,
  Heading,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title } from '../../components/service'
import Paragraph from '../../components/testimonial_paragraph'

const AdvancedEnergeticBodywork = () => {
  const advancedEnergeticBodyworkImage = '/images/works/thumb_5.jpeg'
  const colorValue = useColorModeValue('#202020', '#fcb03b')
  return (
    <Layout title="Advanced Energetic Bodywork">
      <Section delay={0.2}>
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
            src={advancedEnergeticBodyworkImage}
            alt="Advanced Energetic Bodywork"
            borderRadius={'lg'}
          />
        </Box>
        <Container>
          <Box py={5}>
            <Title>Advanced Energetic Bodywork</Title>
            <Heading as="h3" variant="service-title" my={4} fontSize={20}>
              How I developed my Advanced Energetic Bodywork.
            </Heading>
            <Paragraph>
              In a session I work with a variety of techniques, from different
              modalities including:
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
                  Trauma release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Emotional release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  De-armouring
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Masculine and Feminine polarity work
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
                  Chakra cleansing
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Aura cleansing
                </ListItem>
              </List>
              and other tools, to help you release physical and emotional pain,
              and remove the blocks that stop you from having a multi-orgasmic
              body. The aim of a session is not to have an orgasm, but to create
              a deeper loving relationship with yourself, and to learn how to
              cultivate your own inner sexual energy and inner chi.
            </Paragraph>
            <Paragraph>
              In the first few sessions, more pain and trauma is released, and
              you will learn the basics of breathwork and other techniques. In
              later sessions, I teach and support you to develop your own
              energetic body, so that every cell can vibrate and orgasm. This
              creates new information in the body and allows the experience of
              self-love and happiness in, on the cellular level. Which in turn
              brings more energy, health, clarity and, success, into your life.
            </Paragraph>
            <Paragraph>
              The sessions vary from person to person. You might want to focus
              on evolving and integrating your masculine and feminine
              polarities, learning Taoist energy techniques, or to focus more on
              emotional detoxing. Each session is tailored to the individual.
            </Paragraph>
            <Paragraph>
              Some moments may feel sensual as energy runs through your body,
              the work is designed to help you fall in love with yourself. To
              connect your heart with your sex, and remove any shame and guilt
              that you may have about your sexuality.
            </Paragraph>
            <Paragraph>
              You will learn to cultivate Chi, Prana, or life force energy, by
              raising sexual energy up the different channels in your body.
              Allowing in divine universal energy through your crown, while
              recharging and balancing your: chakra, aura, glands and the rest
              of your physical body.
            </Paragraph>
            <Paragraph>
              There is no difference between spiritual energy, sexual energy,
              and healing energy. The difference is our intention and what we do
              with it. Heal ourselves, or others. Manifest our dreams, evolve
              our subtle light bodies or develop a clearer connection to the
              divine and our higher intelligence.
            </Paragraph>
            <Paragraph>
              Sexual energy is generally more powerful, tangible and readily
              available. It is best to work with, and develop, all of the
              channels that energy flows through, and by accepting our sexual
              energy: our spiritual energy and healing energy, can flow more
              freely.
            </Paragraph>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default AdvancedEnergeticBodywork
