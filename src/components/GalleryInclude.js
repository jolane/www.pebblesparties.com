import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import 'flickity/css/flickity.css'

import SuperHeading from './SuperHeading'
import Spacer from './Spacer'
import SubHeading from './SubHeading'
import Arrow from './Arrow'
class GalleryInclude extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const Flickity = require('flickity')
    this.flkty = new Flickity(this.slider, {
      wrapAround: true,
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: false,
    })
  }
  nextSlide(e) {
    this.flkty.next()
  }
  prevSlide(e) {
    this.flkty.previous()
  }

  render() {
    return (
      <Wrapper>
        <Spacer height={40} />
        <SuperHeading>Gallery</SuperHeading>
        <SliderWrapper>
          <Slider innerRef={el => (this.slider = el)}>
            {this.props.images.map(item => (
              <Slide key={item.node.childImageSharp.sizes.originalName}>
                <div>
                  <Img sizes={item.node.childImageSharp.sizes} />
                </div>
              </Slide>
            ))}
          </Slider>
          <NextArrow onClick={this.nextSlide.bind(this)} />
          <PrevArrow onClick={this.prevSlide.bind(this)} />
        </SliderWrapper>
        <Spacer height={5} />
        <SubHeading dark>
          Take a look at some of the parties we’ve helped with in the past.<br />
          <br />
          <Link to="/gallery" title="Gallery">
            Visit Gallery
          </Link>
        </SubHeading>
        <Spacer height={40} />
      </Wrapper>
    )
  }
}

export default GalleryInclude

const Wrapper = styled.div`
  width: 100%;
`

const Slider = styled.div`
  width: 100%;
`
const Slide = styled.div`
  overflow: hidden;
  border-radius: 1.5em;
  position: relative;
  display: block;
  width: 400px;
  height: 320px;
  margin: 0 0.875em;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper,
  .gatsby-image-outer-wrapper {
    height: 100% !important;
    width: 100% !important;
  }
`

const SliderWrapper = styled.div`
  position: relative;
`

const NextArrow = styled(Arrow).attrs({ right: true })`
  position: absolute;
  top: 50%;
  right: 4em;
  margin-top: -2.25em;
`
const PrevArrow = styled(Arrow).attrs({ left: true })`
  position: absolute;
  top: 50%;
  left: 4em;
  margin-top: -2.25em;
`
