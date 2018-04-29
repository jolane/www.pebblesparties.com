import React from 'react'
import styled from 'styled-components'
import 'whatwg-fetch'

import { colors } from '../styles/theme'

class ContactForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target)
    fethc
  }
  render() {
    return (
      <Form {...this.props} onSubmit={this.handleSubmit}>
        <Field>
          <Label>Name *</Label>
          <Input name="name" required alt={this.props.alt} />
        </Field>
        <Field>
          <Label>Email *</Label>
          <Input name="email" type="email" required alt={this.props.alt} />
        </Field>
        <Field>
          <Label>Phone *</Label>
          <Input name="phone" required alt={this.props.alt} />
        </Field>
        <Field>
          <Label>Message *</Label>
          <Textarea name="message" required alt={this.props.alt} />
        </Field>

        <Submit alt={this.props.alt} />
      </Form>
    )
  }
}

export default ContactForm

const Form = styled.form`
  width: 100%;
  color: ${colors.black};
  ${props =>
    props.footer &&
    `
		color: white;
	`};
`

const Field = styled.div`
  margin: 0 0 1em;
`

const Label = styled.label`
  font-size: 1.2em;
  display: block;
`

const Input = styled.input`
  border: none;
  background-color: #4091a0;
  display: block;
  height: 1.7em;
  font-size: 1.4em;
  width: 100%;
  color: ${colors.white};
  padding-left: 0.6em;
  box-sizing: border-box;
  &:invalid,
  &:required {
    box-shadow: none;
  }
  ${props =>
    props.alt &&
    `
      background-color: ${colors.light};
  `};
`

const Textarea = styled.textarea`
  border: none;
  background-color: #4091a0;
  display: block;
  height: 4.5em;
  font-size: 1.4em;
  width: 100%;
  font-family: inherit;
  color: ${colors.white};
  padding-left: 0.6em;
  box-sizing: border-box;
  &:invalid,
  &:required {
    box-shadow: none;
  }
  ${props =>
    props.alt &&
    `
      background-color: ${colors.light};
  `};
`

const Submit = styled.input.attrs({ type: 'submit', value: 'send' })`
  border: 1px solid ${colors.white};
  display: block;
  width: 100%;
  font-size: 1.4em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  background-color: transparent;
  color: ${colors.white};
  text-transform: uppercase;
  box-sizing: border-box;
  font-family: 'BrandonGrotesqueWeb-Bold';
  cursor: pointer;
  &:hover {
    background: ${colors.white};
    color: ${colors.primary};
  }

  ${props =>
    props.alt &&
    `
      color: ${colors.primary};
      border-color: currentColor;
  `};
`
