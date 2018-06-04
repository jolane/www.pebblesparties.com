import React from 'react'
import styled from 'styled-components'

import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import Spacer from '../../components/Spacer'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'
import ServicesCards from '../../components/Services/ServicesCards'
import Testimonials from '../../components/Testimonials/Testimonials'

export default () => (
  <div>
    <Navigation />
    <Banner
      image="/images/banner4.jpg"
      alt="Banner Image, Little girl + pattern"
    />
    <Spacer height="50" />
    <Heading>Our services</Heading>
    <SubHeading dark>
      We offer a huge range of themed, small or large-scale party designs to
      suit every occasion. Contact us today to chat through your options!
    </SubHeading>
    <Spacer height="25" />
    <ServicesCards full />
    <Spacer height="25" />
    <Testimonials />
  </div>
)
