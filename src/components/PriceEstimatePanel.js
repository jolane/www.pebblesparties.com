import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

import HighlightBox from './HighlightBox'
import Spacer from './Spacer'
import SuperHeading from './SuperHeading'
import Heading from './Heading'

export default props => (
  <Wrapper>
    <HighlightBox>
      <SuperHeading>Price Estimate</SuperHeading>
      {/* <Heading dark>Price per child:</Heading>
      <PriceField>{props.pricePerChild}</PriceField> */}
      <Heading dark>Total price:</Heading>
      <PriceField>{props.totalPrice}</PriceField>

      <Spacer height={20} />

      <SuperHeading>Submit Enquiry</SuperHeading>
      <form action="">
        <Field>
          <Label>Name*</Label>
          <Input type="text" name="name" />
        </Field>
        <Field>
          <Label>Email address *</Label>
          <Input type="email" name="email" />
        </Field>
        <Field>
          <Label>Phone number *</Label>
          <Input type="text" name="phone" />
        </Field>
        <Field>
          <Label>Proposed date of the party *</Label>
          <Input type="text" name="date" />
        </Field>
        <Submit>Submit enquiry</Submit>
      </form>
    </HighlightBox>
  </Wrapper>
)

const Wrapper = styled.aside`
  width: 100%;
`
const PriceField = styled.div`
  background: #fff;
  font-family: 'BrandonGrotesqueWeb-Bold';
  color: ${colors.primary};
  font-size: 4.2em;
  text-align: center;
  height: 1.43em;
  line-height: 0.95;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -0.7em;
  box-sizing: border-box;
  padding-top: 0.4em;
  z-index: 200;
  &:before {
    content: '$';
  }
`

const Field = styled.div`
  margin-bottom: 1.5em;
`

const Label = styled.label`
  font-size: 1.4em;
  display: block;
  text-align: left;
  margin-bottom: 0.3em;
`

const Input = styled.input`
  border: none;
  background-color: white;
  display: block;
  height: 1.7em;
  font-size: 2.3em;
  font-weight: 800;
  width: 100%;
  color: ${colors.secondary};
  padding-left: 0.6em;
  box-sizing: border-box;
`
const Submit = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 2.3em;
  border: 0;
  font-family: 'BrandonGrotesqueWeb-Bold';
  padding: 0.5em 2em;
  display: block;
`
