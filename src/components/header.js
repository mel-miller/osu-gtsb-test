import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import OsuNavbar from "./osu-navbar"

const Header = ({ siteTitle }) => (
  <header>
    <OsuNavbar />
    <Masthead>
      <MastheadInner>
        <SiteName>
          <HomeLink to="/">{siteTitle}</HomeLink>
        </SiteName>
      </MastheadInner>
    </Masthead>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//styled components
const Masthead = styled.div`
  background: #202024;
  margin-bottom: 2em;
`

const MastheadInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const SiteName = styled.h1`
  margin: 0;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
