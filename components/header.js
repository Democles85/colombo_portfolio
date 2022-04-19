import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const HeaderBox = styled.span`
  font-size: 130%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  line-height: 35px;
  padding: 10px;
  padding-bottom: 30px;
`

const Header = () => {
  return (
    <HeaderBox>
      <Box
        display="inherit"
        flexDirection="inherit"
        alignItems="inherit"
        justifyContent="inherit"
      >
        <Image src="/images/logo.png" alt="logo" width={['90%', '70%']} />
        <Text
          // fontFamily="'Beau Rivage', cursive"
          textAlign="center"
          fontSize={[28, null, 36]}
          color={useColorModeValue('#202020', '#fcb03b')}
        >
          Resonate With Yourself
        </Text>
      </Box>
      {/* <Box
        textStyle="h1"
        borderRadius="lg"
        p={5}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
            color={useColorModeValue('#fcb03b', '#fcb03b')}
            fontSize="lg"
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="light"
            textAlign="right"
          >
            – Colombo
          </Text>
        </Text>
      </Box> */}
    </HeaderBox>
  )
}

export default Header
