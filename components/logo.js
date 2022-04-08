import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  padding-right: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  const logo = '/images/logo.png'

  return (
    <Link href="/">
      <a>
        <LogoBox>
          {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
          {/* <Image src={logo} width={20} height={20} alt="logo" /> */}
          <Text
            color={useColorModeValue('#FF8000', '#FF8000')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Colombo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
