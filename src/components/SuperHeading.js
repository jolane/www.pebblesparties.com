import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default props => <Heading {...props}>{props.children}</Heading>

const Heading = styled.h3`
  color: ${colors.black};
  font-family: 'MuseoSans-100';
  text-align: center;
  font-size: 2em;
  font-weight: normal;
  line-height: 1.1;
  max-width: 45em;
  position: relative;
  margin: 1em auto;
  text-transform: uppercase;

  &:first-child {
    margin-top: 0;
  }
`
