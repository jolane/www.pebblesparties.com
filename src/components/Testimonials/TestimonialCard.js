import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/theme'
import media from '../../styles/media'

export default props => (
  <Card>
    <Text>{props.text}</Text>
    <Name>{props.name}</Name>
  </Card>
)

const Card = styled.div`
  background: ${colors.white};
  color: ${colors.secondary};
  border-radius: 1.2em;
  padding: 3.3em 2.3em;
  margin: 0 0.875em;
  width: calc(33.334% - 1.75em);
  box-sizing: border-box;
  display: inline-block;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.tablet`
    width: 94%;
    margin: 0 3%;
  `};
`

const Text = styled.p`
  font-size: 3.8em;
  font-family: 'BrandonGrotesqueWeb-Bold';
  margin: 0 0 0.5em;
  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
  ${media.tablet`
    font-size: 2em;
  `};
`

const Name = styled.p`
  font-size: 1.5em;
  color: ${colors.secondary};
  margin: 0;
`
