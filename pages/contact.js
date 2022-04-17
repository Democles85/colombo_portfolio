import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => {
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const toast = useToast()

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
        setShowSuccessMessage(true)
        setButtonText('Send')

        setFirstName('')
        setEmail('')
        setMessage('')
        setSubject('')

        return
      }
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
        <Box>
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
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  placeholder="Type your message"
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
    </Layout>
  )
}

export default Contact
