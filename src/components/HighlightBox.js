import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  width: 100%;
  display: block;
  background: ${colors.light};
  box-sizing: border-box;
  padding: 3rem 2.2rem;
  border-radius: 8px;
  text-align: center;
`
