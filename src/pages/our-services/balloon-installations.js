import React from 'react'
import styled from 'styled-components'

import OurServicesTemplate from './OurServicesTemplate'

const data = {
  title: 'Balloon Installations',
  subTitle: [
    `Balloon installations can make all the difference to your party venue by adding that splash of colour and a personalised touch. We design a wide range of balloon arrangements to suit any occasion- garlands, arches, stand-alone displays and more.`,
    `Below are a few of our classic designs, but please contact us if you'd like more details on our personalised installation options.`,
  ],
  image: `/images/services-balloon.png`,
}

export default () => {
  return (
    <OurServicesTemplate {...data}>
      <h5>Balloon installations:</h5>
      <p>
        Balloon arch
        <span>$300 - $450</span>
      </p>
      <p>
        Helium balloon displays
        <span>$xx - $xx*</span>
      </p>
      <p>
        JUMBO helium balloons
        <span>$35 each</span>
      </p>
      <p className="note">
        *Price to be determined according to size, theme and type of frame
        required for installation.
      </p>
    </OurServicesTemplate>
  )
}
