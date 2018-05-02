import React from 'react'
import styled from 'styled-components'
import Arrow from '../../components/Arrow'
import 'flickity/css/flickity.css'

import { colors } from '../../styles/theme'
import TestimonialCard from './TestimonialCard'
import SuperHeading from '../SuperHeading'

class Testimonials extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        {
          text:
            'Such a great day- the kids are STILL talking about the “magic balloon animals”!',
          name: 'Vickie',
        },
        {
          text:
            'Can’t thank you enough Bek and your team- so efficient and easy going from beginning to end.',
          name: 'Amy',
        },
        {
          text: 'Best decision ever. So easy and the kids absolutely loved it.',
          name: 'Emily',
        },
        {
          text:
            'Thanks again for making everything so easy! I’ll definitely be booking you again next year.',
          name: 'Lucy',
        },
        {
          text: 'Very professional and punctual. Thanks again Pebbles.',
          name: 'Celia',
        },
        {
          text:
            'Thank you sooo much for today! Everything looked amazing… we had such a great time, thank you!',
          name: 'Sandra ',
        },
        {
          text:
            'It was the most perfect night... the balloon garland looked incredible. Thanks again Bek, you’ve been wonderful to work with!!',
          name: 'Claudia',
        },
      ],
    }
  }
  componentDidMount() {
    const Flickity = require('flickity')
    Flickity.prototype._createResizeClass = function() {
      this.element.classList.add('flickity-resize')
    }

    Flickity.createMethods.push('_createResizeClass')

    var resize = Flickity.prototype.resize
    Flickity.prototype.resize = function() {
      this.element.classList.remove('flickity-resize')
      resize.call(this)
      this.element.classList.add('flickity-resize')
    }

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
        <SuperHeading>TESTIMONIALS</SuperHeading>
        <Slider innerRef={el => (this.slider = el)}>
          {this.state.items.map((c, i) => <TestimonialCard key={i} {...c} />)}
        </Slider>
        <Arrows>
          <Arrow onClick={this.prevSlide.bind(this)} left />
          <Arrow onClick={this.nextSlide.bind(this)} right />
        </Arrows>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  background: ${colors.light};
  padding: 2em 0;
  width: 100%;
`

const Slider = styled.div`
  width: 100%;
  max-width: 118em;
  margin: 0 auto 3em;
  position: relative;
  padding-top: 2em;
  .flickity-viewport {
    width: 100%;
  }

  .flickity-resize .carousel-cell {
    min-height: 100%;
  }
`

const Arrows = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 4.5em 4.5em;
  grid-column-gap: 2em;
  justify-content: center;
`

export default Testimonials
