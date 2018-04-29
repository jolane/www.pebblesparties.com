import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import OurServicesTemplate from './OurServicesTemplate'

const data = {
  title: `Complete Entertainment Packages`,
  image: `/images/services-packages.png`,
  subTitle: `The party packages below outline our most frequently booked
  entertainment options. Let us know if you have more specific needs and
  we will be more than happy to discuss alternative designs. View our
  Customised Party Planning page for more details.`,
}

export default () => {
  return (
    <OurServicesTemplate {...data}>
      <h3 className="dark">Up to 15 kids:</h3>
      <h5>1 hour party with 1 host = $200</h5>
      <p>
        <strong>Includes 2 of the following:</strong>
      </p>
      <ul>
        <li>Face painting</li>
        <li>Balloon Twisting</li>
        <li>
          Musical games and obstacle courses which all the kids can enjoy
          together
        </li>
        <li>PLUS a gift bag for each child to take home</li>
      </ul>

      <h5>2 hour party with 1 host = $280</h5>
      <p>
        <strong>Includes:</strong>
      </p>
      <ul>
        <li>Face painting,</li>
        <li>Balloon Twisting</li>
        <li>
          Musical games and obstacle courses which all the kids can enjoy
          together
        </li>
        <li>PLUS a gift bag for each child to take home</li>
      </ul>
      <h3 className="dark">Up to 25 kids:</h3>
      <h5>1 hour party with 2 hosts = $325</h5>
      <p>
        <strong>Includes 2 of the following:</strong>
      </p>
      <ul>
        <li>Face painting</li>
        <li>Balloon Twisting</li>
        <li>
          Musical games and obstacle courses which all the kids can enjoy
          together
        </li>
        <li>PLUS a gift bag for each child to take home</li>
      </ul>
      <h5>2 hour party with 2 hosts = $425</h5>
      <p>
        <strong>Includes:</strong>
      </p>

      <ul>
        <li>Face painting</li>
        <li>Balloon Twisting</li>
        <li>
          Musical games and obstacle courses which all the kids can enjoy
          together
        </li>
        <li>PLUS a gift bag for each child to take home</li>
      </ul>
      <h3 className="dark">More than 30 kids?</h3>
      <h5>
        No problem!{' '}
        <Link to="/contact-us" title="Contact Us">
          Contact us
        </Link>{' '}
        today for a customised quote.
      </h5>
    </OurServicesTemplate>
  )
}
