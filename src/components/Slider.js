import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import flickityStyles from 'flickity/css/flickity.css'

export default class Slider extends Component {
  componentDidMount() {
    const Flickity = require('flickity')
    var flkty = new Flickity(this.input, {
      wrapAround: true,
      cellAlign: 'left',
      pageDots: false,
      prevNextButtons: false,
      autoPlay: 5000,
    })
  }
  render() {
    return (
      <Wrapper
        innerRef={comp => {
          this.input = comp
        }}
      >
        {this.props.slides.map(slide => (
          <Slide key={slide.src} src={slide.src} />
        ))}
      </Wrapper>
    )
  }
}
injectGlobal`
  ${flickityStyles}
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 17.5vw;
`

const Slide = styled.img`
  display: block;
  width: 100%;
  height: 17.5vw;
  height
`
