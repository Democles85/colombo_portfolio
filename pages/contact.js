import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => {
  const formBoxPaddingY = 2.5
  const formBoxPaddingX = 25
  const formBoxWidth = '100%'

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

    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
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
        console.log(error)
        setShowSuccessMessage(false)
        setShowSuccessMessage(true)
        setButtonText('Send')
        return
      }
      console.log(firstName, email, subject, message)
    }
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
                  <FormLabel htmlFor="first-name">First Name</FormLabel>
                  <Input
                    id="first-name"
                    placeHolder="First Name"
                    isRequired
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value)
                    }}
                  />
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
                  isRequired
                  value={subject}
                  onChange={e => {
                    setSubject(e.target.value)
                  }}
                />
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
                  isRequired
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
              </Box>
              <Box
                width={formBoxWidth}
                py={formBoxPaddingY}
                px={formBoxPaddingX}
              >
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  placeholder="Type your message"
                  isRequired
                  isFullWidth
                  id="message"
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value)
                  }}
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
          </form>
        </Box>
      </Section>
    </Layout>
  )
}

export default Contact
