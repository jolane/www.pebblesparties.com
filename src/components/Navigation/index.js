import React from 'react'
import styled from 'styled-components'
import { path } from 'ramda'

import media from '../../styles/media'
import { colors } from '../../styles/theme'
import Item from './Item'

export const items = [
  'Home',
  'About us',
  [
    'Our Services',
    'Complete Entertainment Packages',
    'Balloon Installations',
    'Additional Party Services',
  ],
  'Customised Party Planning',
  'Gallery',
  'Booking Enquiry',
  'Contact us',
]

const removeNavOpen = () => {
  const bodyEl = document.querySelector('body')
  bodyEl.classList.remove('nav-open')
}

const Navigation = ({ navOpen, closeNav }) => (
  <Nav navOpen={navOpen}>
    <Close />
    <List>
      {items.map((v, i) => (
        <Item onClick={() => closeNav()} key={v}>
          {v}
        </Item>
      ))}
    </List>
  </Nav>
)

export default Navigation

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  width: 100%;
  z-index: 5;
  ${media.tablet`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    ${props =>
      props.navOpen &&
      `
      opacity: 1;
      visibility: visible;
    `};
  `};
`

const List = styled.ul`
  width: 100%;
  max-width: 118em;
  position: relative;
  margin: 0 auto;
  height: 5em;
  display: grid;
  grid-gap: 1px;
  grid-auto-flow: column dense;
  grid-template-rows: 1fr;
  padding: 0;
  ${media.tablet`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `};
`
const Close = styled.div`
  position: absolute;
  top: 2em;
  right: 2em;
  height: 40px;
  width: 40px;
  color: white;
  z-index: 5;
  cursor: pointer;
  display: none;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(45deg) translateY(-50%);
  }
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(-45deg) translateY(-50%);
  }
`
