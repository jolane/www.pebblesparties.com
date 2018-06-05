import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Banner from '../components/Banner'
import Nav from '../components/Navigation'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Spacer from '../components/Spacer'

export default ({ data }) => (
  <Wrapper>
    <Nav />
    <Banner image="/images/banner12.jpg" />
    <Spacer height={50} />
    <Heading>Gallery</Heading>
    <SubHeading>
      Here's a snapshot of some of the parties and balloon installations we've
      done to give you an idea of what we're all about.
    </SubHeading>
    <Spacer height={25} />
    <GalleryWrapper>
      {data.allImageSharp.edges.map(image => (
        <I>
          <div>
            <Img sizes={image.node.sizes} />
          </div>
        </I>
      ))}
    </GalleryWrapper>
    <Spacer height={60} />
  </Wrapper>
)

export const queryGallery = graphql`
  query GalleryImagesQuery {
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 800) {
            base64
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: block;
`

const GalleryWrapper = styled.div`
  width: 95%;
  max-width: 118em;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36em, 1fr));
  grid-column-gap: 3em;
  grid-row-gap: 3em;
`

const I = styled.div`
  width: 100%;
  background: red;
  padding-bottom: 80%;
  border-radius: 1.5em;
  overflow: hidden;
  position: relative;

  > div {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .gatsby-image-wrapper,
  .gatsby-image-outer-wrapper {
    height: 100% !important;
    width: 100% !important;
  }
`
