import React from "react"
import styled from "styled-components"

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
          <li>
            <a href="http://www.osu.edu/help.php" class="help">
              Help
            </a>
          </li>
          <li>
            <a href="http://buckeyelink.osu.edu/" class="buckeyelink">
              BuckeyeLink
            </a>
          </li>
          <li>
            <a href="http://www.osu.edu/map/" class="map">
              Map
            </a>
          </li>
          <li>
            <a href="http://www.osu.edu/findpeople.php" class="findpeople">
              Find People
            </a>
          </li>
          <li>
            <a href="https://email.osu.edu/" class="webmail">
              Webmail
            </a>
          </li>
          <li>
            <a href="http://www.osu.edu/search/" class="search">
              Search Ohio State
            </a>
          </li>
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
  max-width: 960px;
`

const UnivInfo = styled.div`
  float: left;
  padding: 1em 0;
`

const UnivName = styled.a`
  height: 14px;
  width: 80px;
  margin-left: 0;
  display: block;
  text-indent: -9999px;
  background: url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/osu_name.png)
    0 0 no-repeat;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background: url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/osu_name@2x.png)
      0 0 no-repeat;
    background-size: contain;
  }
`
const UnivLinks = styled.div`
  float: right;
  clear: none;
  padding: 1em 0 0;
  margin-top: -2px;

  ul {
    margin: 0;

    li {
      list-style: none;
      float: left;
      margin-right: 0.875em;

      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
