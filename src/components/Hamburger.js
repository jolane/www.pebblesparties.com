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

  ${props =>
    props.navOpen &&
    `
    color: white;
    `};
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
    ${props =>
      props.navOpen &&
      `
      top: 50%;
      margin-top: -0.2rem;
      transform: rotate(45deg);
      transition: top 0.2s linear, transform 0.2s linear 0.2s;
    `};
  }

  &:nth-child(2) {
    top: 50%;
    transition: transform 0.2s linear 0s;
    margin-top: -0.2rem;
    ${props =>
      props.navOpen &&
      `
      transform: rotate(-45deg);
      transition: transform 0.2s linear 0.2s;
    `};
  }

  &:nth-child(3) {
    top: 100%;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    margin-top: -0.4rem;
    ${props =>
      props.navOpen &&
      `
      top: 50%;
      margin-top: -0.2rem;
      transform: rotate(-45deg);
      transition: top 0.2s linear, transform 0.2s linear 0.2s;
    `};
  }
`

const Hamburger = ({ openNav, closeNav, navOpen }) => (
  <Container
    onClick={() => {
      if (navOpen) {
        closeNav()
      } else {
        openNav()
      }
    }}
    navOpen={navOpen}
  >
    <Line navOpen={navOpen} />
    <Line navOpen={navOpen} />
    <Line navOpen={navOpen} />
  </Container>
)

export default Hamburger
