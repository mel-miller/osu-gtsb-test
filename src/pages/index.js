import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class IndexPage extends React.Component {
  render() {
    const node5 = this.props.data.nodePage
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h2>{node5.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node5.body.value }} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    nodePage(drupal_internal__nid: { eq: 3 }) {
      drupal_internal__nid
      title
      body {
        value
      }
    }
  }
`
