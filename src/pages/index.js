import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { colors } from '../styles/vars'

import Heading from '../components/Heading'

const IndexPage = () => (
  <div>
    <Banner
      src="/images/secondary_banner.jpg"
      alt="Banner Image, Little girl + pattern"
    />

    <Heading>Website Coming Soon!</Heading>
    <Text>
      <strong>Contact Us</strong>
      <br />
      Bek Lah (Events Director)<br />
      Phone: 0433 911 584<br />
      Email:{' '}
      <a
        href="mailto:pebblesparties@gmail.com"
        title="pebblesparties@gmail.com"
      >
        pebblesparties@gmail.com
      </a>
    </Text>
  </div>
)

export default IndexPage

const Banner = styled.img`
  display: block;
  width: 100%;
`

const Text = styled.div`
  text-align: center;
  color: ${colors.secondary};
  font-size: 1.6em;
  line-height: 1.5;
  strong {
    font-family: 'BrandonGrotesqueWeb-Bold';
    font-size: 1.5em;
  }
  > a {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
`
