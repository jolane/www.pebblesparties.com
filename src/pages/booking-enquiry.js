import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Sticky from 'react-sticky-el'
import ReactDOM from 'react-dom'

import media from '../styles/media'

import Nav from '../components/Navigation'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Spacer from '../components/Spacer'
import EnquiryBlock from '../components/EnquiryBlock'
import General from '../components/General'

import CompleteEntertainmentPackages from '../components/BookingEnquiry/CompleteEntertainmentPackages'
import BalloonInstallations from '../components/BookingEnquiry/BalloonInstallations'
import AdditionalPartyServices from '../components/BookingEnquiry/AdditionalPartyServices'

import PriceEstimatePanel from '../components/PriceEstimatePanel'

class BookingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfChildren: 15,
      packageCost: 0,
      options: [],
    }

    // bind away
    this.updateNumberOfChildren = this.updateNumberOfChildren.bind(this)
    this.updateOption = this.updateOption.bind(this)
    this._calulateOptionCost = this._calulateOptionCost.bind(this)
  }
  updateNumberOfChildren(numberOfChildren) {
    this.setState({ numberOfChildren })
  }

  updateOption(optionName, optionValue, optionDescription) {
    let updatedOptions = []

    // options does not exists
    if (!this.state.options.find(o => o.name === optionName)) {
      updatedOptions = [
        ...this.state.options,
        {
          name: optionName,
          value: optionValue,
          description: optionDescription,
        },
      ]

      // option exists but & value is equal
    } else if (
      this.state.options.find(
        o => o.name === optionName && o.value === optionValue
      )
    ) {
      const index = this.state.options.findIndex(io => io.name === optionName)
      updatedOptions = [
        ...this.state.options.slice(0, index),
        { name: optionName, value: null, description: optionDescription },
        ...this.state.options.slice(index + 1),
      ]
      // update value
    } else {
      const index = this.state.options.findIndex(io => io.name === optionName)
      updatedOptions = [
        ...this.state.options.slice(0, index),
        {
          name: optionName,
          value: optionValue,
          description: optionDescription,
        },
        ...this.state.options.slice(index + 1),
      ]
    }

    this.setState({ options: updatedOptions })
  }

  _calulateOptionCost(object) {
    const value = this.state.options.reduce((total, option) => {
      let multiplierMatch = option.name.match(/[a-zA-Z]+(Multiplier)$/)
      if (!multiplierMatch && option.value !== null) {
        // check for multipler
        let multiplier = this.state.options.find(
          o => o.name === `${option.name}Multiplier`
        )
        if (multiplier) {
          return total + parseInt(option.value, 10) * multiplier.value
        } else {
          return total + parseInt(option.value, 10)
        }
      } else {
        return total + 0
      }
    }, 0)
    return value
  }

  render() {
    const totalCost = this.state.packageCost + this._calulateOptionCost()
    const pricePerChild = totalCost / this.state.numberOfChildren || 0

    return (
      <div>
        <Nav />
        <Banner
          image="/images/banner13.jpg"
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
            <CompleteEntertainmentPackages
              updateNumberOfChildren={this.updateNumberOfChildren}
              updateOption={this.updateOption}
              currentOptions={this.state.options}
            />
            <BalloonInstallations
              updateOption={this.updateOption}
              currentOptions={this.state.options}
            />
            <AdditionalPartyServices
              updateOption={this.updateOption}
              currentOptions={this.state.options}
            />
          </Blocks>
          <SideBar>
            <Sticky topOffset={40}>
              <PriceEstimatePanel
                pricePerChild={pricePerChild.toFixed(2)}
                totalPrice={totalCost}
              />
            </Sticky>
          </SideBar>
        </Grid>
      </div>
    )
  }
}

export default BookingPage

const Blocks = styled.form`
  width: auto;
`
const SideBar = styled.div`
  height: 100%;
  position: relative;
  z-index: 1001;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-column-gap: 50px;
  width: 94%;
  max-width: 118em;
  margin: 0 auto;
  ${media.tablet`
    grid-template-columns: 1fr;
  `};
`

const Indented = styled.div`
  width: 85%;
  padding-left: 4.4rem;
`
