import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

const Heading = ({ dark, image, children }) => (
  <Wrapper dark={dark}>
    {image && <Img src={image} alt={children} />}
    {children}
  </Wrapper>
)

Heading.defaultProps = {
  dark: false,
}

const Wrapper = styled.h3`
  color: ${colors.primary};
  font-family: 'BrandonGrotesqueWeb-Bold';
  text-align: center;
  font-size: 4.2em;
  font-weight: normal;
  line-height: 1.1;
  max-width: 23em;
  position: relative;
  margin: 0.4em auto 1em;
  ${props =>
    props.dark &&
    `
    color: ${colors.secondary};
  `};

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

const Img = styled.img`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 30%;
  max-width: 300px;
`

export default Heading
