import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Democles-News">
    <Container>
      <Title>
        Democles-News<Badge>late 2019 - early 2020</Badge>
      </Title>
      <P>
        Democles-News is a school project about making a news website, like a
        newspaper. The languages used are: Html, Css, JavaScript and a small
        page in php.
      </P>
      <P>This service has not been closed, but is not getting updated!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Browsers</Meta>
          <span>Chrome, Firefox, Safari... basically most of them</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, PHP, MySql, Css, JavaScript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>News Sources</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://www.panorama.com.al/">
            <Badge mr={2}>Panorama Newspaper</Badge>
            A popular Albanian newspaper website.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>Syri Newspaper</Badge>
            Used mainly for the thumbnails and some video embeds.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/democles_news_1.png"
          alt="democles-news"
        />
        <WorkImage
          src="/images/works/democles_news_2.png"
          alt="democles-news"
        />
      </SimpleGrid>
      <WorkImage
        src="/images/works/democles_news_thumnail.png"
        alt="democles-news"
      />
    </Container>
  </Layout>
)

export default Work
