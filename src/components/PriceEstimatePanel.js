import React from 'react'
import styled from 'styled-components'

import HighlightBox from './HighlightBox'
import Spacer from './Spacer'
import SuperHeading from './SuperHeading'
import Heading from './Heading'

export default props => (
  <Wrapper>
    <HighlightBox>
      <SuperHeading>Price Estimate</SuperHeading>
      <Heading dark>Price per child:</Heading>
      <Heading dark>Total price:</Heading>
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
