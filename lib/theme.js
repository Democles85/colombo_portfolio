import { background, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
      transition: 'background 0.5s ease, color 0.5s ease'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'header-title': {
        textDecoration: 'none',
        fontSize: 20,
        textDecorationColor: '#525252',
        marginTop: 3,
        marginBottom: 4
      },
      'service-title': props => ({
        color: mode('#202020', '#fcb03b')(props)
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#de8e14')(props),
      textUnderlineOffset: 3
    })
  },
  Drawer: {
    baseStyle: props => ({
      bg: mode('#f0e7db', '#202023')(props)
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
