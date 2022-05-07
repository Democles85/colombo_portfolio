import {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  List,
  ListItem,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/article'
import { MdMail } from 'react-icons/md'
import Section from '../components/section'
import * as gtag from '../lib/gtag'

const Contact = () => {
  const ContactThumbnail = '/images/works/contact_thumbnail.jpg'
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})

  const [buttonText, setButtonText] = useState('Send')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (firstName.length <= 0) {
      tempErrors['firstName'] = true
      isValid = false
    }

    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }

    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    if (email.length <= 0 || !email.match(emailFormat)) {
      tempErrors['email'] = true
      isValid = false
    }
    setErrors({ ...tempErrors })
    // console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending')

      const res = await fetch('/api/send', {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          subject: subject,
          message: message
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        // console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')

        setFirstName('')
        setEmail('')
        setMessage('')
        setSubject('')

        return
      }

      gtag.event({
        action: 'submit_form',
        category: 'Contact',
        label: email
      })

      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')

      setFirstName('')
      setEmail('')
      setMessage('')
      setSubject('')
    }
    // console.log(firstName, email, subject, message)
  }

  return (
    <Layout title="Contact">
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
            src={ContactThumbnail}
            alt="Sound Healing"
            borderRadius={'lg'}
          />
        </Box>
      </Section>
      <Section delay={0.4}>
        <Box>
          <Heading as="h3" variant="section-title">
            Contact Me:
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Box display="flex" flexDir={['column', null, 'row']}>
                <Box
                  width={formBoxWidth}
                  py={formBoxPaddingY}
                  px={formBoxPaddingX}
                >
                  <FormLabel htmlFor="first-name">Name / Nickname</FormLabel>
                  <Input
                    id="firstName"
                    placeHolder="Name / Nickname"
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value)
                    }}
                  />
                  {errors?.firstName && (
                    <FormHelperText color={'red.500'}>
                      Please provide a name or a nickname.
                    </FormHelperText>
                  )}
                </Box>

                {/* <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input id="last-name" placeHolder="Last Name" />
                <FormHelperText>Last Name is not required</FormHelperText>
              </Box> */}
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input
                  id="subject"
                  placeHolder="Subject"
                  value={subject}
                  onChange={e => {
                    setSubject(e.target.value)
                  }}
                />
                {errors?.subject && (
                  <FormHelperText color={'red.500'}>
                    Please provide a subject.
                  </FormHelperText>
                )}
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeHolder="Email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
                {errors?.email && (
                  <FormHelperText color={'red.500'}>
                    Please provide an email address.
                  </FormHelperText>
                )}
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="message">Message / Questions</FormLabel>
                <Textarea
                  placeHolder="Type your message"
                  isFullWidth
                  id="message"
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value)
                  }}
                />
                {errors?.message && (
                  <FormHelperText color={'red.500'}>
                    Please leave us a message so that we get back to you.
                  </FormHelperText>
                )}
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                py={formBoxPaddingY}
              >
                <Button width="50%" type="submit">
                  {buttonText}
                </Button>
              </Box>
              <Box
                width={formBoxWidth}
                my={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                {showSuccessMessage && (
                  <Section delay={0.5}>
                    <Alert status="success" variant="solid" borderRadius="5px">
                      <AlertIcon />
                      Your message was sent. Thank you!
                    </Alert>
                  </Section>
                )}
                {showFailureMessage && (
                  <Section delay={0.5}>
                    <Alert status="error" variant="solid" borderRadius="5px">
                      <AlertIcon />
                      Oops! Something went wrong, please try again.
                    </Alert>
                  </Section>
                )}
              </Box>
            </FormControl>
          </form>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Box>
          <Heading as="h3" variant="section-title">
            Contact Me Via Email:
          </Heading>
          <List>
            <ListItem>
              <Link
                href="mailto:resonatewithyourself@gmail.com"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={MdMail} />}
                >
                  @ResonateWithYourself
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>
      <Section delay={0.6}>
        <Box>
          <Heading as="h3" variant="section-title" pb={4}>
            Location:
          </Heading>
          <AspectRatio ratio={16 / 9}>
            <Box as={AspectRatio} borderRadius={'lg'}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5676191075245!2d19.497305006125178!3d40.440572210146094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134533ce11900875%3A0x31ce3c1972c2d94c!2sResonate%20With%20Yourself%20(%20Holistic%20Therapy%20%2F%20Bodywork%20%2F%20Massage%20)!5e0!3m2!1sen!2s!4v1651527787510!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </AspectRatio>
        </Box>
      </Section>
    </Layout>
  )
}

export default Contact
