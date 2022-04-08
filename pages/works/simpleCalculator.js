import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Calculator">
    <Container>
      <Title>
        Web Calculator <Badge>March 2019 - April 2019</Badge>
      </Title>
      <P>A simple calculator written in JavaScript</P>
      <P>
        Using functions in javascript it was required to build a simple
        calculator. The functions are simple, basically included in the
        javascript library (Math).
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Html, Css</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Democles85/simple-calculator">
            v1.0.0
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/calculator_01.png" alt="simpleCalculator" />
    </Container>
  </Layout>
)

export default Work
