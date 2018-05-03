import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Nav from '../components/Navigation'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Spacer from '../components/Spacer'
import EnquiryBlock from '../components/EnquiryBlock'
import Radio from '../components/Radio'
import Checkbox from '../components/Checkbox'
import General from '../components/General'

import PriceEstimatePanel from '../components/PriceEstimatePanel'

class BookingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfKids: 0,
      pricePerChild: 0,
      totalPrice: 0,
    }
  }
  updateCalc() {}
  render() {
    return (
      <div>
        <Nav />
        <Banner
          src="/images/secondary_banner.jpg"
          alt="Banner Image, Little girl + pattern"
        />
        <Spacer height={50} />
        <Heading>Booking enquiry</Heading>
        <SubHeading>
          Select from the options below to design your perfect party! Then enter
          your contact details and submit your enquiry – we will get in touch
          with you to discuss your party plans.
        </SubHeading>
        <Spacer height={50} />
        <Grid>
          <Blocks>
            <EnquiryBlock
              headerBackground="/images/services-packages.png"
              title="Complete Entertainment Packages"
            >
              <p>
                The party packages below outline our most frequently booked
                entertainment options. Let us know if you have more specific
                needs and we will be more than happy to discuss alternative
                designs. View our Customised Party Planning page for more
                details.
              </p>
              <General larger>
                <h3>Up to 15 kids:</h3>
                <Radio name="type" value="1hour1host" large>
                  1 hour part with 1 host = $200
                </Radio>
                <Indented>
                  <h6>Includes 2 of the following</h6>
                  <Checkbox name="15-kids-option-1" value="Face Painting">
                    Face painting
                  </Checkbox>
                  <Checkbox name="15-kids-option-2" value="Balloon Twisting">
                    Balloon Twisting
                  </Checkbox>
                  <Checkbox
                    name="15-kids-option-3"
                    value="Musical games and obstacle courses which all the kids can enjoy together"
                  >
                    Musical games and obstacle courses which all the kids can
                    enjoy together
                  </Checkbox>
                  <p>&bull; PLUS a gift bag for each child to take home</p>
                </Indented>
                <Radio name="type" value="2hour1host" large>
                  2 hour party with 1 host = $280
                </Radio>
                <Indented>
                  <h6>Includes:</h6>
                  <ul>
                    <li>Face painting.</li>
                    <li>Ballow Twisting.</li>
                    <li>
                      Music games and obstacle course which all kids can enjoy
                      together
                    </li>
                    <li>PLUS a gift bag for each child to take home</li>
                  </ul>
                </Indented>
                <h3>Up to 25 kids:</h3>
                <Radio name="type" value="1hour2hosts" large>
                  1 hour part with 2 hosts = $325
                </Radio>
                <Indented>
                  <h6>Includes 2 of the following</h6>
                  <Checkbox name="15-kids-option-1" value="Face Painting">
                    Face painting
                  </Checkbox>
                  <Checkbox name="15-kids-option-2" value="Balloon Twisting">
                    Balloon Twisting
                  </Checkbox>
                  <Checkbox
                    name="15-kids-option-3"
                    value="Musical games and obstacle courses which all the kids can enjoy together"
                  >
                    Musical games and obstacle courses which all the kids can
                    enjoy together
                  </Checkbox>
                  <p>&bull; PLUS a gift bag for each child to take home</p>
                </Indented>
                <Radio name="type" value="2hours2hosts" large>
                  2 hour party with 2 hosts = $425
                </Radio>
                <Indented>
                  <h6>Includes:</h6>
                  <ul>
                    <li>Face painting.</li>
                    <li>Ballow Twisting.</li>
                    <li>
                      Music games and obstacle course which all kids can enjoy
                      together
                    </li>
                    <li>PLUS a gift bag for each child to take home</li>
                  </ul>
                </Indented>
                <h3>More than 30 kids:</h3>
                <p>
                  No problem! <Link to="/contact-us">Contact us</Link> today for
                  a customised quote.
                </p>
              </General>
            </EnquiryBlock>
            <EnquiryBlock
              headerBackground="/images/services-balloon.png"
              title="Balloon Installations"
            >
              <p>
                Balloon installations can make all the difference to your party
                venue by adding that splash of colour and a personalised touch.
                We design a wide range of balloon arrangements to suit any
                occasion- garlands, arches, stand-alone displays and more.
              </p>
              <p>
                Below are a few of our classic designs, but please contact us if
                you'd like more details on our personalised installation
                options.
              </p>
              <Table>
                <tr>
                  <td>
                    <Checkbox name="ballon_options[]" value="Balloon arch">
                      Balloon arch
                    </Checkbox>
                  </td>
                  <td>$300 – $450*</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      name="ballon_options[]"
                      value="Helium balloon displays"
                    >
                      Helium balloon displays
                    </Checkbox>
                  </td>
                  <td>$xx – $xx*</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      name="ballon_options[]"
                      value="JUMBO helium balloons"
                    >
                      JUMBO helium balloons
                      <Radio name="number_jumbo" value="1" inline>
                        1
                      </Radio>
                      <Radio name="number_jumbo" value="2" inline>
                        2
                      </Radio>
                      <Radio name="number_jumbo" value="3" inline>
                        3
                      </Radio>
                      <Radio name="number_jumbo" value="4" inline>
                        4
                      </Radio>
                      <Radio name="number_jumbo" value="5" inline>
                        5
                      </Radio>
                    </Checkbox>
                  </td>
                  <td>$35 each</td>
                </tr>
              </Table>
              <General>
                <p>
                  *Price to be determined according to size, theme and type of
                  frame required for installation.
                </p>
              </General>
            </EnquiryBlock>
            <EnquiryBlock
              headerBackground="/images/services-additional.png"
              title="Additional Party Services"
            >
              <p>
                The list below outlines the party services that we can add-on to
                any of the Complete Entertainment Packages. We can also provide
                any of the below party services on a stand-alone basis.
              </p>
              <Spacer height={20} />
              <General>
                <h5>Face Painting:</h5>
              </General>
              <Spacer height={10} />
              <Table>
                <tr>
                  <td>
                    <Radio name="additional_face_painting" value="1 hour">
                      1 hour
                    </Radio>
                  </td>
                  <td>(recommended max 20 kids)</td>
                  <td>$140</td>
                </tr>
                <tr>
                  <td>
                    <Radio name="additional_face_painting" value="1.5 hours">
                      1.5 hours
                    </Radio>
                  </td>
                  <td>(recommended max 25 kids)</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>
                    <Radio name="additional_face_painting" value="2 hours">
                      2 hours
                    </Radio>
                  </td>
                  <td>(+30 kids)</td>
                  <td>$220</td>
                </tr>
              </Table>
              <Spacer height={20} />
              <General>
                <h5>Balloon twisting:</h5>
              </General>
              <Spacer height={10} />
              <Table>
                <tr>
                  <td>
                    <Radio name="additional_balloon_twisting" value="1 hour">
                      1 hour
                    </Radio>
                  </td>
                  <td>(recommended max 20 kids)</td>
                  <td>$140</td>
                </tr>
                <tr>
                  <td>
                    <Radio name="additional_balloon_twisting" value="1.5 hours">
                      1.5 hours
                    </Radio>
                  </td>
                  <td>(recommended max 25 kids)</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>
                    <Radio name="additional_balloon_twisting" value="2 hours">
                      2 hours
                    </Radio>
                  </td>
                  <td>(+30 kids)</td>
                  <td>$220</td>
                </tr>
              </Table>
              <Spacer height={20} />
              <General>
                <h5>Take-home goodies for the kids:</h5>
              </General>
              <Spacer height={10} />
              <General left>
                <p>
                  How many kids (roughly)?*
                  <Radio name="goodies" inline value="5">
                    5
                  </Radio>
                  <Radio name="goodies" inline value="10">
                    10
                  </Radio>
                  <Radio name="goodies" inline value="15">
                    15
                  </Radio>
                  <Radio name="goodies" inline value="20">
                    20
                  </Radio>
                  <Radio name="goodies" inline value="25">
                    25
                  </Radio>
                  <Radio name="goodies" inline value="30">
                    30
                  </Radio>
                </p>
              </General>

              <Spacer height={20} />
              <General>
                <h5>Costumes and character appearance:</h5>
              </General>
              <Spacer height={10} />
              <Table>
                <tr>
                  <td>
                    <Radio name="costumes" value="props">
                      Themed dressing up props (masks, capes, fairy wings etc.)
                    </Radio>
                  </td>
                  <td>$xxx</td>
                </tr>
                <tr>
                  <td>
                    <Radio name="additional_balloon_twisting" value="character">
                      Themed costume character appearance
                    </Radio>
                  </td>
                  <td>$xxx</td>
                </tr>
              </Table>
            </EnquiryBlock>
          </Blocks>
          <PriceEstimatePanel
            pricePerChild={this.state.pricePerChild}
            totalPrice={this.state.totalPrice}
          />
        </Grid>
      </div>
    )
  }
}

export default BookingPage

const Blocks = styled.div`
  width: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  width: 95%;
  max-width: 118em;
  margin: 0 auto;
`

const Indented = styled.div`
  width: 85%;
  padding-left: 4.4rem;
`

const Table = styled.table`
  width: 90%;
  td {
    text-align: left;
  }
  td:last-child {
    text-align: right;
  }
`
