import React from "react"
import styled from "styled-components"

const OsuNavbar = () => (
  <Navbar
    role="navigation"
    id="osu_navbar"
    aria-labelledby="osu_navbar_heading"
  >
    <NavbarInner>
      <div class="univ_info">
        <p class="univ_name">
          <a href="http://osu.edu" title="The Ohio State University">
            The Ohio State University
          </a>
        </p>
      </div>

      <UnivLinks>
        <Links>
          <List>
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
          </List>
        </Links>
      </UnivLinks>
    </NavbarInner>
  </Navbar>
)
export default OsuNavbar

//styled-components
const Navbar = styled.div`
  border-bottom: 5px solid #b00;
  background: #eaeaea;
  color: #202024;
  font-family: "proximanova";
`
const NavbarInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const UnivLinks = styled.div`
  float: right;
  clear: none;
  padding: 0.875em 0 0;
`
const Links = styled.div`
  float: left;
`
const List = styled.ul`
  margin: 0;
  margin-top: -2px;

  & li {
    font-size: 0.84375em;
    list-style: none;
    float: left;
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }

    a {
      display: block;
      overflow: hidden;
      background: 0 0 no-repeat;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
