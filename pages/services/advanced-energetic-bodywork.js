import {
  Box,
  Container,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title } from '../../components/service'

const AdvancedEnergeticBodywork = () => {
  const advancedEnergeticBodyworkImage = '/images/works/thumb_5.jpeg'
  return (
    <Layout title="Advanced Energetic Bodywork">
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
            src={advancedEnergeticBodyworkImage}
            alt="Advanced Energetic Bodywork"
            borderRadius={'lg'}
          />
        </Box>
        <Container>
          <Box py={5}>
            <Title>Advanced Energetic Bodywork</Title>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default AdvancedEnergeticBodywork
