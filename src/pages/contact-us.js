import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Navigation'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Spacer from '../components/Spacer'
import General from '../components/General'
import ContactForm from '../components/ContactForm'

export default () => {
  return (
    <div>
      <Nav />
      <Banner
        image="/images/banner2.jpg"
        alt="Banner Image, Little girl + pattern"
      />
      <Spacer height="50" />
      <Heading dark>Contact us</Heading>
      <SubHeading>
        We’d love to hear from you if you’re thinking about doing something
        special for your child, or if you would like to hear more about our
        services. Get in touch with us today!
      </SubHeading>
      <Spacer height="25" />
      <Grid>
        <General center>
          <h5>Events Director</h5>
          <h6>
            <strong>Bek Lah</strong>
          </h6>
          <p>
            Phone: 0433 911 584<br />
            Email: pebblesparties@gmail.com
          </p>
        </General>
        <General center>
          <h5>Open hours</h5>
          <p>
            Enquiries welcome between<br /> 8.30am–7pm
          </p>
          <p>
            We are available to host parties between <br /> 9am–6pm
          </p>
        </General>
        <General>
          <h5>Send us an enquiry</h5>
          <ContactForm alt />
        </General>
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  max-width: 118em;
  width: 100%;
  margin: 0 auto 6em;
  display: grid;
  grid-template-columns: 0.9fr 0.9fr 1.2fr;
  grid-column-gap: 2em;
`
