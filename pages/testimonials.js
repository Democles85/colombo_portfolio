import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  SimpleGrid,
  Text,
  useColorModeValue,
  WrapItem
} from '@chakra-ui/react'
import Slider from 'react-slick'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import P from '../components/testimonial_paragraph'
import React from 'react'
import Layout from '../components/layouts/article'
import data from '../utils/data'
import Section from '../components/section'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

const Testimonials = () => {
  const colorValue = useColorModeValue(
    'rgba(32,32,32, 0.18)',
    'rgba(255,255,255, 0.18)'
  )

  const settings = {
    dots: true,
    accessibility: true,
    autoplay: true,
    fade: false,
    pauseOnSelect: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    infinite: true,
    touchThreshold: 100,
    speed: 1000,
    cssEase: 'ease-out',
    autoplaySpeed: 10000,
    useTransform: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: true,
          arrows: false
        },
        breakpoint: 600,
        settings: {
          fade: true,
          arrows: false
        },
        breakpoint: 480,
        settings: {
          fade: true,
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <Box display="flex" justifyContent="center">
        <Box
          position={'relative'}
          bottom={-5}
          py={2}
          borderRadius={'lg'}
          color="white"
        >
          <ul>{dots}</ul>
        </Box>
      </Box>
    )
  }

  return (
    <Layout title="Testimonials">
      {/* <SimpleGrid
        columns={1}
        spacing={10}
        mb={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      > */}
      <Section delay={0.2}>
        <Box py={5} textAlign="center">
          <Slider {...settings}>
            {data.testimonies?.map(testimonies => (
              <Grid
                key={testimonies.title}
                textAlign="center"
                background="rgba(245,166,35,0.25)"
                // boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
                borderRadius={'lg'}
                border={['none', `1px solid ${colorValue}`]}
                py={5}
                maxWidth="560px"
              >
                {/* Card Header */}
                <WrapItem display="inline-block" textAlign="center">
                  <Avatar
                    name={testimonies.author}
                    src={testimonies.image}
                    size="xl"
                    showBorder
                    borderColor={colorValue}
                    bg="transparent"
                  />
                  <GridItem
                    key={testimonies.author}
                    paddingTop={1}
                    paddingBottom={5}
                    px={10}
                  >
                    <Text fontSize={[18, null, 20]} fontWeight="bold">
                      {testimonies.author}
                    </Text>
                    <Text fontSize={[14, null, 16]}>{testimonies.country}</Text>
                  </GridItem>
                </WrapItem>
                {/* Content */}
                {testimonies.content?.map(content => (
                  <GridItem
                    key={content.paragraph}
                    w="100%"
                    md={4}
                    h="100%"
                    px={[5, 15, 50]}
                  >
                    <P>{content.text}</P>
                  </GridItem>
                ))}
              </Grid>
            ))}
          </Slider>
        </Box>
      </Section>
      {/* </SimpleGrid> */}
    </Layout>
  )
}

export default Testimonials
