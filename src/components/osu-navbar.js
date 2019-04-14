import React from "react"
import styled from "styled-components"

import UnivLink from "./univ-link"

const OsuNavbar = () => (
  <Navbar
    role="navigation"
    id="osu_navbar"
    aria-labelledby="osu_navbar_heading"
  >
    <NavbarInner>
      <UnivInfo>
        <p>
          <UnivName href="http://osu.edu" title="The Ohio State University">
            The Ohio State University
          </UnivName>
        </p>
      </UnivInfo>

      <UnivLinks>
        <ul>
          <UnivLink
            name="Help"
            link="http://www.osu.edu/help.php"
            icon="resp-help"
          />
          <UnivLink
            name="BuckeyeLink"
            link="http://buckeyelink.osu.edu/"
            icon="resp-buckeyelink"
          />
          <UnivLink name="Map" link="http://www.osu.edu/map/" icon="resp-map" />
          <UnivLink
            name="Find People"
            link="http://www.osu.edu/findpeople.php"
            icon="resp-findpeople"
          />
          <UnivLink
            name="Webmail"
            link="https://email.osu.edu/"
            icon="resp-webmail"
          />
          <UnivLink
            name="Search Ohio State"
            link="http://www.osu.edu/search/"
            icon="resp-search"
          />
        </ul>
      </UnivLinks>
    </NavbarInner>
  </Navbar>
)
export default OsuNavbar

//styled-components
const Navbar = styled.div`
  font-size: 13px;
  line-height: 1.5;
  background: #eaeaea;
  background: linear-gradient(to bottom, #e3e3e3 0, #b9b9ba 100%);
  color: #202024;
  border-bottom: 5px solid #b00;
  clear: both;
  margin: 0;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
    padding: 0;
  }
  a {
    color: #202024;
  }
`

const NavbarInner = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  @media only screen and (min-width: 960px) {
    max-width: 960px;
  }
`

const UnivInfo = styled.div`
  float: left;
  padding: 1em 0;
`

const UnivName = styled.a`
  height: 16px;
  width: 80px;
  margin-left: 0;
  margin-top: 2px;
  display: block;
  text-indent: -9999px;
  background: url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/osu_name.png)
    0 0 no-repeat;
  @media only screen and (max-width: 720px) and (-webkit-min-device-pixel-ratio: 2),
    only screen and (max-width: 720px) and (min--moz-device-pixel-ratio: 2),
    only screen and (max-width: 720px) and (-o-min-device-pixel-ratio: 2/1),
    only screen and (max-width: 720px) and (min-device-pixel-ratio: 2) {
    background: url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/osu_name@2x.png)
      0 0 no-repeat;
    background-size: contain;
  }
`
const UnivLinks = styled.div`
  float: right;
  clear: none;
  padding: 1em 0 0;

  ul {
    margin: 0;
  }
`
