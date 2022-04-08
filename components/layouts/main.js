import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Header from '../header'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Colombos Homepage" />
        <meta name="author" content="Sixhei Tartari" />
        <meta name="author" content="sixheitartari" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeJhin1" />
        <meta name="twitter:creator" content="@LeJhin1" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Colombos' Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Colombos - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Header />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
