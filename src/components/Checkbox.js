import React from 'react'
import styled from 'styled-components'
import slugify from 'slugify'

import { colors } from '../styles/theme'

export default props => (
  <Container {...props} onClick={props.onClickCheckbox}>
    <Label large={props.large} checked={props.checked}>
      {props.children}
    </Label>
  </Container>
)

const Container = styled.div`
  display: block;
  width: 100%;
  position: relative;
  padding: 0 0 0 1.8em;
  text-align: left;
  margin-bottom: 0.5em;
  font-size: 1.6rem;
  color: ${colors.black};
  ${props => props.inline && `width: inline-block;`};
  ${props =>
    props.large &&
    `
    font-size: 2.2rem;
    color: ${colors.primary};
    font-weight: bold;
  `};
`

const Label = styled.div`
  line-height: 1em;
  cursor: pointer;
  color: inherit;
  &:before {
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    border-radius: 0.2em;
    box-sizing: border-box;
    border: 2px solid ${colors.primary};
    background-color: ${colors.light};
    position: absolute;
    top: 0;
    left: 0;
    ${props =>
      props.checked &&
      `
      border-width: 0.2em;
      background-color: #ffffff;
    `};
  }

  ${props =>
    props.large &&
    `
      font-family: 'BrandonGrotesqueWeb-Bold';
      font-size: 1.3em;
    `};
`
