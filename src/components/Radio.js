import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default ({
  onClickRadio,
  name,
  value,
  checked,
  large,
  children,
  inline,
}) => (
  <Container onClick={onClickRadio} inline={inline} large={large}>
    <Input type="radio" checked={checked} />
    <Label large={large} checked={checked}>
      {children}
    </Label>
  </Container>
)

const Container = styled.div`
  display: block;
  width: 100%;
  position: relative;
  padding: 0 0 0 1.3em;
  text-align: left;
  font-size: 1.6rem;
  color: ${colors.black};
  ${props =>
    props.inline && `display: inline-block; width: auto; margin-left: 1em;`};
  ${props =>
    props.large &&
    `
    font-size: 2.2rem;
    color: ${colors.primary};
    font-weight: bold;
    padding-left: 1.8em;
  `};
`

const Input = styled.input`
  position: absolute;
  z-index: 10;
  display: block;
  padding: 0.5em;
  appearance: none;
  top: 0.1em;
  left: 0.1em;
  opacity: 0;
`

const Label = styled.label`
  line-height: 1em;
  cursor: pointer;
  color: inherit;
  &:before {
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${colors.primary};
    background-color: ${colors.light};
    position: absolute;
    top: 0;
    left: 0;
    input:checked + & {
      border-width: 0.3em;
      background-color: #ffffff;
    }
    ${props =>
      props.checked &&
      `
      border-width: 0.3em;
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
