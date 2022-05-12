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
  Select,
  Text,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/article'
import { MdMail } from 'react-icons/md'
import Section from '../components/section'
import * as gtag from '../lib/gtag'

const Contact = () => {
  const colorValue09 = useColorModeValue(
    'rgba(32 ,32 ,32, 0.9)',
    'rgba(255, 255, 255, 0.9)'
  )

  const colorValue06 = useColorModeValue(
    'rgba(32,32,32, 0.60)',
    'rgba(255,255,255, 0.60)'
  )

  const colorValue04 = useColorModeValue(
    'rgba(32, 32, 32, 0.40)',
    'rgba(255, 255, 255, 0.40)'
  )

  const ContactThumbnail = '/images/works/contact_thumbnail.jpg'
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [gender, setGender] = useState('')

  const [errors, setErrors] = useState({})

  const [buttonText, setButtonText] = useState('Send')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFillAllMessage, setShowFillAllMessage] = useState(false)
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

    if (gender.length <= 0) {
      tempErrors['gender'] = true
      isValid = false
    }

    if (email.length <= 0 || !email.match(emailFormat)) {
      tempErrors['email'] = true
      isValid = false
    }
    setErrors({ ...tempErrors })
    // console.log('errors', errors)
    // console.log('valid', isValid)
    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm === true) {
      setButtonText('Sending')

      const res = await fetch('/api/send', {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          subject: subject,
          message: message,
          gender: gender
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        // console.log(error, isValidForm)
        setShowSuccessMessage(false)
        setShowFillAllMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')

        setFirstName('')
        setEmail('')
        setMessage('')
        setSubject('')
        setGender('')

        return
      }
      gtag.event({
        action: 'submit_form',
        category: 'Contact',
        label: email
      })

      setShowSuccessMessage(true)
      setShowFillAllMessage(false)
      setShowFailureMessage(false)
      setButtonText('Send')

      setFirstName('')
      setEmail('')
      setMessage('')
      setSubject('')
      setGender('')
    } else {
      setShowSuccessMessage(false)
      setShowFailureMessage(false)
      setShowFillAllMessage(true)
      setButtonText('Send')

      return
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
                    borderColor={colorValue06}
                    _placeholder={{
                      color: colorValue04
                    }}
                    _hover={{
                      borderColor: colorValue09
                    }}
                    focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                    id="firstName"
                    placeholder="Your Name"
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
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input
                  borderColor={colorValue06}
                  _placeholder={{
                    color: colorValue04
                  }}
                  _hover={{
                    borderColor: colorValue09
                  }}
                  focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                  id="subject"
                  placeholder="Subject"
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
                  borderColor={colorValue06}
                  _placeholder={{
                    color: colorValue04
                  }}
                  _hover={{
                    borderColor: colorValue09
                  }}
                  focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                  id="email"
                  placeholder="Email"
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
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Select
                  borderColor={colorValue06}
                  _hover={{
                    borderColor: colorValue09
                  }}
                  focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                  value={gender}
                  onChange={e => {
                    setGender(e.target.value)
                  }}
                >
                  <option
                    style={{
                      color: colorValue04
                    }}
                    selected
                    hidden
                    disabled
                    value=""
                  >
                    Choose your gender
                  </option>
                  <option
                    style={{
                      color: colorValue09,
                      background: useColorModeValue('#fff', '#202023')
                    }}
                    value="Male"
                  >
                    Male
                  </option>
                  <option
                    style={{
                      color: colorValue09,
                      background: useColorModeValue('#fff', '#202023')
                    }}
                    value="Female"
                  >
                    Female
                  </option>
                  <option
                    style={{
                      color: colorValue09,
                      background: useColorModeValue('#fff', '#202023')
                    }}
                    value="Other"
                  >
                    Other
                  </option>
                </Select>
                {errors?.gender && (
                  <FormHelperText color={'red.500'}>
                    Please select your gender.
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
                  borderColor={colorValue06}
                  _placeholder={{
                    color: colorValue04
                  }}
                  _hover={{
                    borderColor: colorValue09
                  }}
                  focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                  placeholder="Type your message"
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
                <Button
                  width="50%"
                  type={'submit'}
                  bg={useColorModeValue(
                    'rgba(255,255,255,0.9)',
                    'rgba(255,255,255, 0.2)'
                  )}
                >
                  {buttonText}
                </Button>
              </Box>
              <Box
                width={formBoxWidth}
                my={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                {showSuccessMessage && (
                  <Section delay={0.2}>
                    <Alert status="success" variant="solid" borderRadius="lg">
                      <AlertIcon />
                      Your message was sent. Thank you!
                    </Alert>
                  </Section>
                )}
                {showFillAllMessage && (
                  <Section delay={0.2}>
                    <Alert status="warning" variant="solid" borderRadius="lg">
                      <AlertIcon />
                      Please fill in all the required fields.
                    </Alert>
                  </Section>
                )}
                {showFailureMessage && (
                  <Section delay={0.2}>
                    <Alert status="error" variant="solid" borderRadius="lg">
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
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </AspectRatio>
        </Box>
      </Section>
    </Layout>
  )
}

export default Contact
