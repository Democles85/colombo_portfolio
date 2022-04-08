import {
  Avatar,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  WrapItem
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/article'
import data from '../utils/data'

const Testimonies = () => {
  const colorValue = useColorModeValue(
    'rgba(255,255,255, 0.8)',
    'rgba(255,255,255, 0.18)'
  )
  return (
    <Layout title="Testimonies">
      {/* <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}> */}
      <SimpleGrid
        columns={1}
        spacing={10}
        mb={10}
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
      >
        {data.testimonies.map(testimonies => (
          <Grid
            key={testimonies.title}
            background="rgba(245,166,35,0.25)"
            boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
            borderRadius="10px"
            border="1px solid rgba(255,255,255, 0.18)"
            py={5}
            // maxWidth="560px"
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
            <GridItem key={testimonies.content} w="100%" md={4} h="100%" px={5}>
              <Text textAlign="justify" fontSize={[16, null, 18]}>
                {testimonies.content}
              </Text>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export default Testimonies
