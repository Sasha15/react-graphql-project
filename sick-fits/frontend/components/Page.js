import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const MyButton = styled.button`
  background: red;
  font-size: 50px;
`

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>Click Me<span> please</span></MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page