import React, { Component } from "react"
import styled from "styled-components"

export default class UnivLink extends Component {
  render() {
    const { name, link, icon } = this.props

    return (
      <ListItem icon={icon}>
        <a href={link}>{name}</a>
      </ListItem>
    )
  }
}

//styled-components
const ListItem = styled.li`
  list-style: none;
  float: left;
  margin-right: 0.9875em;
  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    @media only screen and (max-width: 720px) {
      height: 23px;
      width: 23px;
      margin-top: -2px;
      display: block;
      overflow: hidden;
      text-indent: -999px;
      background: ${props =>
        `url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/${
          props.icon
        }.png) 0 0 no-repeat`};
    }
    @media only screen and (max-width: 720px) and (-webkit-min-device-pixel-ratio: 2),
      only screen and (max-width: 720px) and (min--moz-device-pixel-ratio: 2),
      only screen and (max-width: 720px) and (-o-min-device-pixel-ratio: 2/1),
      only screen and (max-width: 720px) and (min-device-pixel-ratio: 2) {
      background-image: ${props =>
        `url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/${
          props.icon
        }@2x.png) !important`};
      -webkit-background-size: 23px;
      -moz-background-size: 23px;
      background-size: 23px;
    }
  }
`
