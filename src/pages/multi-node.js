import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class MultiNode extends React.Component {
  render() {
    const node1 = this.props.data.one
    const node3 = this.props.data.three
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h2>{node1.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node1.body.value }} />
          <h2>{node3.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node3.body.value }} />
        </div>
      </Layout>
    )
  }
}

export default MultiNode

export const query = graphql`
  query {
    one: nodePage(drupal_internal__nid: { eq: 1 }) {
      drupal_internal__nid
      title
      body {
        value
      }
    }
    three: nodePage(drupal_internal__nid: { eq: 3 }) {
      drupal_internal__nid
      title
      body {
        value
      }
    }
  }
`
