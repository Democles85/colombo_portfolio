import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      opacity={0.4}
      fontSize="sm"
      position="absolute"
      left="0"
      bottom="0"
      textAlign="center"
      width="100%"
    >
      &copy; {new Date().getFullYear()} Colombo. All Rights Reserved.
    </Box>
  )
}

export default Footer
