import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/single-node/">Go to single node example page.</Link>
    <Link to="/multi-node/">Go to multilple node example page.</Link>
  </Layout>
)

export default IndexPage
