import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class SingleNode extends React.Component {
  render() {
    const node = this.props.data.nodePage
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
        </div>
      </Layout>
    )
  }
}

export default SingleNode

export const query = graphql`
  query {
    nodePage(drupal_internal__nid: { eq: 3 }) {
      drupal_internal__nid
      title
      body {
        value
      }
    }
  }
`
