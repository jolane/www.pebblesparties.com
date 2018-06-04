import React from 'react'
import styled from 'styled-components'

import media from '../styles/media'
import { colors } from '../styles/theme'

const Container = styled.div`
  width: 40px;
  height: 30px;
  position: absolute;
  top: 2em;
  right: 2em;
  z-index: 1002;
  cursor: pointer;
  display: none;
  color: ${colors.secondary};
  ${media.tablet`
  	display: block;
	`};

  body.nav-open & {
    color: white;
  }
`

const Line = styled.div`
  height: 0.4rem;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    top: 0;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    body.nav-open & {
      top: 50%;
      margin-top: -0.2rem;
      transform: rotate(45deg);
      transition: top 0.2s linear, transform 0.2s linear 0.2s;
    }
  }

  &:nth-child(2) {
    top: 50%;
    transition: transform 0.2s linear 0s;
    margin-top: -0.2rem;
    body.nav-open & {
      transform: rotate(-45deg);
      transition: transform 0.2s linear 0.2s;
    }
  }

  &:nth-child(3) {
    top: 100%;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    margin-top: -0.4rem;
    body.nav-open & {
      top: 50%;
      margin-top: -0.2rem;
      transform: rotate(-45deg);
      transition: top 0.2s linear, transform 0.2s linear 0.2s;
    }
  }
`

class Hamburger extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    const body = document.querySelector('body')
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open')
    } else {
      body.classList.add('nav-open')
    }
  }
  render() {
    return (
      <Container
        onClick={e => {
          this.toggleNav()
        }}
      >
        <Line />
        <Line />
        <Line />
      </Container>
    )
  }
}

export default Hamburger
