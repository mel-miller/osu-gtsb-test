import React, { Component } from "react"
import styled from "styled-components"

export default class UnivLink extends Component {
  render() {
    return (
      <ListItem>
        <a href={this.props.link}>{this.props.name}</a>
      </ListItem>
    )
  }
}

//styled-components
const ListItem = styled.li`
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
`
