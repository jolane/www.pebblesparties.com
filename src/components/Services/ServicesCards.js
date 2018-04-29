import React from 'react'
import styled from 'styled-components'

import { colors, sizes } from '../../styles/theme'

import ServicesCard from './ServicesCard'
import SuperHeading from '../SuperHeading'

const cards = [
  {
    name: 'Complete Entertainment Package',
    img: 'services-packages.png',
    hover: 'services-packages-hover.png',
    to: '/our-services/complete-entertainment-packages',
    list: [
      'Face painting',
      'Balloon twisting',
      'Party games',
      'Gift bag for each child',
    ],
  },
  {
    name: 'Balloon Installations',
    img: 'services-balloon.png',
    hover: 'services-ballons-hover.png',
    to: '/our-services/balloon-installations',
    list: [
      'Balloon arches',
      'Balloon installations',
      'Helium balloons',
      'JUMBO balloons',
    ],
  },
  {
    name: 'Additional Party Services',
    img: 'services-additional.png',
    hover: 'services-additional-hover.png',
    to: '/our-services/additional-party-services',
    list: ['Face painting', 'Balloon twisting', 'PLUS optional add-ons'],
  },
]

export default ({ full }) => (
  <Cards>
    <SuperHeading>Our Services</SuperHeading>
    <Wrapper>
      {cards.map((card, i) => <ServicesCard key={i} {...card} full={full} />)}
    </Wrapper>
  </Cards>
)

const Cards = styled.section`
  width: 100%;
  padding: 4em 0;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: ${sizes.maxContentWidth};
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-auto-columns: min-content;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 3.6em;
`
