import React from 'react'
import styled from 'styled-components'

import media from '../styles/media'

import Banner from '../components/Banner'
import Nav from '../components/Navigation'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Spacer from '../components/Spacer'
import General from '../components/General'
import ContactForm from '../components/ContactForm'
import HighlightBox from '../components/HighlightBox'

export default () => {
  return (
    <div>
      <Nav />
      <Banner image="/images/banner3.jpg" />
      <Spacer height={50} />
      <Heading>Customised Party Planning</Heading>
      <SubHeading dark>
        At Pebbles Parties we understand that the most special occasions are
        ones that are tailored to suit you. That’s why we offer the fullest
        range of party locations, themes and designs.
      </SubHeading>
      <SubHeading dark>
        If you’d like an event which caters entirely to your needs, we would be
        more than happy to discuss your custom requirements and start planning
        your dream day.
      </SubHeading>
      <Spacer height={25} />
      <Grid>
        <General>
          <p>
            Here are some examples of the sort of customised services we can
            offer:
          </p>
          <ul>
            <li>Costumed entertainers to match the theme of your party</li>
            <li>Complete set up of tables, chairs and tableware</li>
            <li>
              Custom gift bags for each child to go home with to remember the
              fun they had
            </li>
            <li>
              A huge repertoire of games, workshops and craft activities to keep
              the children engaged and entertained throughout the party
            </li>
            <li>AND much more!</li>
          </ul>
          <p>
            Our Customised Party Planning adds that extra special touch to make
            your child’s party truly memorable, without any of the stress or
            work on the parents end.
          </p>
          <p>Contact us today to start planning your dream day!</p>
        </General>
        <div>
          <HighlightBox>
            <General>
              <h5 className="light">
                Contact us today to start planning your dream day!
              </h5>
              <p>
                Bek Lah (Events Director)<br />
                Phone: 0433 911 584<br />
                Email:{' '}
                <a
                  href="mailto:info@pebblesparties.com"
                  title="info@pebblesparties.com"
                >
                  info@pebblesparties.com
                </a>
              </p>
            </General>
          </HighlightBox>
          <Spacer height={50} />
          <General>
            <p>
              <strong>Send us an enquiry</strong>
            </p>
          </General>
          <ContactForm alt />
        </div>
      </Grid>
      <Spacer height={60} />
    </div>
  )
}

const Grid = styled.div`
  width: 95%;
  max-width: 118em;
  position: relative;
  margin: 0 auto;
  grid-template-columns: 1fr 30em;
  justify-content: space-between;
  grid-column-gap: 6em;
  display: grid;
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  `};
`
