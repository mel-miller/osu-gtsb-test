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
  margin-right: 1.125em;
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
      display: block;
      overflow: hidden;
      text-indent: -999px;
      background: ${props =>
        `url(https://www.osu.edu/assets/web/navbar/osu_navbar/images/${
          props.icon
        }.png)`};
    }
  }
`
