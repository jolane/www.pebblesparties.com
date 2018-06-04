import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default props => <Heading {...props}>{props.children}</Heading>

const Heading = styled.h3`
  color: ${colors.primary};
  font-family: 'BrandonGrotesqueWeb-Bold';
  text-align: center;
  font-size: 2.5em;
  font-weight: normal;
  line-height: 1.1;
  max-width: 40em;
  position: relative;
  margin: 1em auto;
  width: 94%;
  ${props =>
    props.dark &&
    `
    color: ${colors.secondary};
  `};
`
