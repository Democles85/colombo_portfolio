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
        <meta name="description" content="Resonate With Yourself" />
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
        <meta name="twitter:image" content="/public/card.png" />
        <meta
          property="og:site_name"
          content="Resonate With Yourself Homepage"
        />
        <meta
          name="keywords"
          content="Resonate, Yourself, Resonate With Yourself, Colombo, Sixhei, Tartari, Therapy, De-Armoring, dearmoring, de, armoring, tantra, tantra dearmoring, bodywork, "
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/card.png" />
        <title>Resonate With Yourself - Homepage</title>
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
