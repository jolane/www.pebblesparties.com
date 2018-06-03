import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import { colors } from '../styles/theme'

import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import SuperHeading from '../components/SuperHeading'
import Nav from '../components/Navigation'
import Banner from '../components/Banner'
import Arrow from '../components/Arrow'
import SocialMediaIcons from '../components/SocialMediaIcon'
import ServicesCards from '../components/Services/ServicesCards'
import Spacer from '../components/Spacer'
import LightBackground from '../components/LightBackground'
import Textimonials from '../components/Testimonials/Testimonials'
import GalleryInclude from '../components/GalleryInclude'
import Slider from '../components/Slider'
import gallery from './gallery'

const IndexPage = ({ data }) => (
  <div>
    <Nav />
    <Slider
      slides={[
        { src: '/images/banner1.jpg' },
        { src: '/images/banner2.jpg' },
        { src: '/images/banner3.jpg' },
        { src: '/images/banner4.jpg' },
        { src: '/images/banner5.jpg' },
      ]}
    />
    <Spacer height="30" />
    <Heading>
      Energy, enthusiasm and passion for creating joyful moments is what we’re
      all about.
    </Heading>
    <ServicesCards />
    <Spacer height="50" />
    <LightBackground>
      <SuperHeading>About us</SuperHeading>
      <Heading dark>
        We are dedicated to creating the most memorable and exciting day for
        your child
      </Heading>
      <SubHeading dark>
        With over 30 combined years of party hosting experience- we know that
        it’s all about capturing the imagination of your child and transporting
        them to a magical place.
      </SubHeading>
      <SubHeading dark>
        <Link to="/about-us">Find out more</Link>
      </SubHeading>
    </LightBackground>
    <GalleryInclude images={data.allFile.edges} />
    <Textimonials />
  </div>
)

export default IndexPage

export const queryIndex = graphql`
  query IndexPageQuery {
    allFile(filter: { relativePath: { glob: "*.jpg" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 800) {
              base64
              src
              srcSet
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
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
