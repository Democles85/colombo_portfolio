import NextLink from 'next/link'
import {
  Box,
  Button,
  useColorModeValue,
  Text,
  Image,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { BsFillCircleFill } from 'react-icons/bs'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/testimonial_paragraph'

const Home = () => {
  const colorValue = useColorModeValue('#202020', '#fcb03b')

  return (
    <Layout>
      <Section>
        <Box
          textStyle="h1"
          borderRadius="lg"
          p={5}
          background="rgba(245,166,35,0.25)"
          boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
          border={useColorModeValue(
            '1px solid rgba(0,0,0, 0.18)',
            '1px solid rgba(255,255,255, 0.18)'
          )}
        >
          <Text
            color={useColorModeValue('#202020', '#eeeeee')}
            fontWeight={['medium', null, 'bold']}
            fontSize={[18, null, 24]}
            letterSpacing="tight"
          >
            “Do not try to find your home by seeking light, all darkness inside
            and outside the Universe is part of it.”{' '}
            <Text
              color={useColorModeValue('#202023', '#fff')}
              fontSize="lg"
              fontFamily="M PLUS Rounded 1c, sans-serif"
              fontWeight="light"
              textAlign="right"
            >
              – Colombo
            </Text>
          </Text>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Box>
          <Image
            loading="lazy"
            src="/images/works/home_thumbnail.jpg"
            alt="De Armouring"
            borderRadius={['8px', '5px']}
            // boxShadow="0px 0px 25px 25px rgba(0, 0, 0, 0.25)"
          />
        </Box>
        <Container>
          <Box py={5}>
            <Heading
              textAlign={'center'}
              as="h3"
              variant="service-title"
              fontSize={26}
              my={5}
            >
              What is Resonate With Yourself?
            </Heading>
            <Paragraph>
              Resonate with yourself is based on a{' '}
              <span style={{ color: colorValue, fontWeight: 'bold' }}>
                holistic, physical, emotional, mental, and spiritual level
              </span>
              , where everything is connected as a single body. The modalities
              that are used to resonate with yourself are:
              <List py={2} pl={5}>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Self Awareness
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Bodywork
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
                  Breathwork
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Shadows
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Prana
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Reiki
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={colorValue}
                    width={'7px'}
                  />
                  Duality &#38; Non Duality
                </ListItem>
              </List>
              Those being feminine or masculine or other genders, to support all
              the brave hearts working on their own pace.
            </Paragraph>
          </Box>
        </Container>
        <Box align="center" my={4}>
          <NextLink href="/services">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              Services
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Layout>
  )
}

export default Home
