import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Maths Game">
    <Container>
      <Title>
        Maths Game<Badge>2019</Badge>
      </Title>
      <P>
        A simple assignment for creating a maths game in javascript and html.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, JavaScript, Css</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/maths_game_thumbnail.png" alt="MathsGame" />
    </Container>
  </Layout>
)

export default Work
