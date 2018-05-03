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
      <Heading dark>Price per child:</Heading>
      <PriceField>{props.pricePerChild}</PriceField>
      <Heading dark>Total price:</Heading>
      <PriceField>{props.totalPrice}</PriceField>
    </HighlightBox>
    <Spacer height={20} />
    <HighlightBox>
      <SuperHeading>Submit Enquiry</SuperHeading>
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
  line-height: 1.43em;
  display: block;
  &:before {
    content: '$';
  }
`
