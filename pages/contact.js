import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => {
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'
  return (
    <Layout title="Contact">
      <Section delay={0.2}>
        <Box>
          <FormControl>
            <Box display="flex" flexDir={['column', null, 'row']}>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <Input id="first-name" placeHolder="First Name" isRequired />
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input id="last-name" placeHolder="Last Name" />
              </Box>
            </Box>
            <Box width={formBoxWidth} py={formBoxPaddingY} px={formBoxPaddingX}>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input id="subject" placeHolder="Subject" isRequired />
            </Box>
            <Box width={formBoxWidth} py={formBoxPaddingY} px={formBoxPaddingX}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeHolder="Email" isRequired />
            </Box>
            <Box width={formBoxWidth} py={formBoxPaddingY} px={formBoxPaddingX}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                placeholder="Type your message"
                isRequired
                isFullWidth
                id="message"
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              py={formBoxPaddingY}
            >
              <Button width="50%" type="submit">
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Section>
    </Layout>
  )
}

export default Contact
