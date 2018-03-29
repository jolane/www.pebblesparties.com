import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/vars'

export default ({ children }) => <Heading>{children}</Heading>

const Heading = styled.h3`
  color: ${colors.secondary};
  font-family: 'BrandonGrotesqueWeb-Bold';
  text-align: center;
  font-size: 3.8em;
  font-weight: normal;
`
