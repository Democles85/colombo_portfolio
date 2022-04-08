import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shoppocles">
    <Container>
      <Title>
        Shoppocles <Badge>September 15, 2021 - </Badge>
      </Title>
      <P>
        An E-Commerce Website for different products like tech related or day to
        day use. Created with Commerce.js, Stripe and PayPal
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://shoppocles.netlify.app/">
            https://shoppocles.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React Native, NodeJS, NextJs, Commerce.js, Stripe, Paypal (Coming
            Soon!)
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/shoppocles_01.png" alt="Shoppocles" />
      <WorkImage src="/images/works/shoppocles_02.png" alt="Shoppocles" />
      <WorkImage src="/images/works/shoppocles_03.png" alt="Shoppocles" />
    </Container>
  </Layout>
)

export default Work
