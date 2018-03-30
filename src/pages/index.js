import React from 'react'
import Link from 'gatsby-link'

import styled, { ThemeProvider } from 'styled-components'
import { colors } from '../styles/vars'
import theme from '../styles/theme'

import Heading from '../components/Heading'
import Nav from '../components/Navigation'
import Arrow from '../components/Arrow'
import SocialMediaIcons from '../components/SocialMediaIcon'


const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Nav />
      <Banner
        src="/images/secondary_banner.jpg"
        alt="Banner Image, Little girl + pattern"
      />
      <Heading>Energy, enthusiasm and passion for creating joyful moments is what we’re all about.</Heading>
      <Heading dark>Jolane</Heading>
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

      <Arrow up />
      <Arrow right />
      <Arrow down />
      <Arrow left />

      <SocialMediaIcons href="http://facebook.com" type="facebook" />
      <SocialMediaIcons href="http://facebook.com" type="instagram" />
      <SocialMediaIcons href="http://facebook.com" type="youtube" />
    </div>
  </ThemeProvider>
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
