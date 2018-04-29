import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from '../styles/theme'
import General from '../components/General'
import HighlightBox from './HighlightBox'

export default () => (
  <HighlightBox>
    <General>
      <h5>Click here to start planning your party today!</h5>
      <StyledLink to="/booking-enquiry">Booking enquiry page</StyledLink>
      <h5>Or contact us with any queries</h5>
      <p>
        <br />
        Phone: 0433 911 584<br />
        Email:{' '}
        <a
          href="mailto:info@pebblesparties.com"
          title="info@pebblesparties.com"
        >
          info@pebblesparties.com
        </a>
      </p>
    </General>
  </HighlightBox>
)

const StyledLink = styled(Link)`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.white};
  font-family: 'BrandonGrotesqueWeb-Bold';
  text-decoration: none;
  height: 2em;
  line-height: 2em;
  font-size: 1.5em;
  margin: 1em auto 0;
  padding: 0.25em 1em 0 1em;
`
