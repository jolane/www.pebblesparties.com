import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/vars'

export default (props) => <Heading {...props}>{props.children}</Heading>

const Heading = styled.h3`
  color: ${colors.primary};
  font-family: 'BrandonGrotesqueWeb-Bold';
  text-align: center;
  font-size: 4.6em;
  font-weight: normal;
  line-height: 1.1;
  max-width: 23em;
  position: relative;
  margin: 1em auto;
  ${props => props.dark && `
    color: ${colors.secondary};
  `}
`
