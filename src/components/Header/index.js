import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../Logo'
import Hamburger from '../Hamburger'

const Header = ({ openNav, closeNav, navOpen }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Logo />
      </Link>
    </h1>
    <Hamburger openNav={openNav} closeNav={closeNav} navOpen={navOpen} />
  </Container>
)

export default Header

const Container = styled.header`
  width: 100%;
  padding-top: 6em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 2em;

  > h1 {
    width 28rem;
  }
`
