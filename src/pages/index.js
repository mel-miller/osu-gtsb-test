import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const pages = this.props.data.allNodePage.edges
    const pageTitles = pages.map(page => <li>{page.node.title}</li>)
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2>Article List</h2>
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
