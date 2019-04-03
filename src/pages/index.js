import React from "react"
import Layout from "../components/layout"

class IndexPage extends React.Component {
  render() {
    const pages = this.props.data.allNodePage.edges
    const pageTitles = pages.map(page => <li>{page.node.title}</li>)
    return (
      <Layout>
        <ul>{pageTitles}</ul>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    allNodePage {
      edges {
        node {
          title
        }
      }
    }
  }
`
