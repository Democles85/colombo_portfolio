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
        pb={10}
      >
        <Image src="/images/logo.png" alt="logo" />
        <Text
          fontSize={[36, 40, 46]}
          fontFamily="Beau Rivage, cursive"
          color={useColorModeValue('#202020', '#fbb03b')}
        >
          Resonate With Yourself
        </Text>
      </Box>
      <Box
        textStyle="h1"
        borderRadius="lg"
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Text color={useColorModeValue('#202020', '#eeeeee')} fontWeight="bold">
          “The greatest healing therapy is friendship and love.”{' '}
          <Text
            color={useColorModeValue('#FF8000', '#FF8000')}
            fontSize="lg"
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="light"
            textAlign="right"
          >
            – Hubert Humphrey
          </Text>
        </Text>
      </Box>
    </HeaderBox>
  )
}

export default Header
