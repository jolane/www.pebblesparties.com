import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import EnquiryBlock from '../EnquiryBlock'
import Radio from '../Radio'
import Checkbox from '../Checkbox'
import General from '../General'

const Indented = styled.div`
  width: 85%;
  padding-left: 4.4rem;
`

// Package structure

class CompleteEntertainmentPackages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPackage: null,
      selectedIncludes1: new Array(),
      selectedIncludes2: new Array(),
      selectedIncludes3: new Array(),
    }

    this.updateSelectedPackage = this.updateSelectedPackage.bind(this)
    this.getOptionValue = this.getOptionValue.bind(this)
    this.updateOptions = this.updateOptions.bind(this)
  }

  updateSelectedPackage(selectedPackage) {
    this.setState({ selectedPackage })
    const parts = selectedPackage.split('|')
    this.props.updateNumberOfChildren(parseInt(parts[0], 10))
    this.props.updateOption(
      'Package',
      parseInt(parts[3], 10),
      `Package - Kids ${parts[0]} - Hours ${parts[1]}`
    )
  }

  updateOptions(type, value) {
    let isUnChecking = false

    // you can always deselect
    if (this.getOptionValue(type) === true) {
      this.props.updateOption(type, null)
      isUnChecking = true
    }
    const packagesSelected = this.props.currentOptions.filter(
      item => /^package/.test(item.name) && item.value === 0
    )

    if (packagesSelected.length < 2) {
      this.props.updateOption(type, value)
    } else if (!isUnChecking) {
      alert('You can only select 2 options.')
    }
  }

  getOptionValue(name) {
    const item = this.props.currentOptions.find(item => item.name === name)
    if (item) {
      return item.value === 0 ? true : null
    } else {
      return null
    }
  }

  render() {
    return (
      <EnquiryBlock
        headerBackground="/images/services-packages.png"
        title="Complete Entertainment Packages"
      >
        <p>
          The party packages below outline our most frequently booked
          entertainment options. Let us know if you have more specific needs and
          we will be more than happy to discuss alternative designs. View our
          Customised Party Planning page for more details.
        </p>
        <General larger>
          <h3>Up to 10 - 15 kids:</h3>
          <Radio
            name="type"
            value="15|1|1|180"
            onClickRadio={e => this.updateSelectedPackage('15|1|1|180')}
            checked={this.state.selectedPackage === '15|1|1|180'}
            large
          >
            1 hour part with 1 host = $180
          </Radio>
          <Indented>
            <h6>Includes 2 of the following</h6>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageFacePainting', 0)
              }
              checked={!!this.getOptionValue('packageFacePainting')}
            >
              Face painting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageBalloonTwisting', 0)
              }
              checked={!!this.getOptionValue('packageBalloonTwisting')}
            >
              Balloon Twisting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e => this.updateOptions('packageGames', 0)}
              checked={!!this.getOptionValue('packageGames')}
            >
              Musical games and obstacle courses which all the kids can enjoy
              together
            </Checkbox>
            <p>&bull; PLUS a gift bag for each child to take home</p>
          </Indented>
          <Radio
            onClickRadio={e => this.updateSelectedPackage('15|1.5|1|240')}
            checked={this.state.selectedPackage === '15|1.5|1|240'}
            large
          >
            1.5 hour party with 1 host = $240
          </Radio>
          <Indented>
            <h6>Includes 2 of the following</h6>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageFacePainting', 0)
              }
              checked={!!this.getOptionValue('packageFacePainting')}
            >
              Face painting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageBalloonTwisting', 0)
              }
              checked={!!this.getOptionValue('packageBalloonTwisting')}
            >
              Balloon Twisting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e => this.updateOptions('packageGames', 0)}
              checked={!!this.getOptionValue('packageGames')}
            >
              Musical games and obstacle courses which all the kids can enjoy
              together
            </Checkbox>
            <p>&bull; PLUS a gift bag for each child to take home</p>
          </Indented>
          <Radio
            name="type"
            value="15|2|1|320"
            onClickRadio={e => this.updateSelectedPackage('15|2|1|320')}
            checked={this.state.selectedPackage === '15|2|1|320'}
            large
          >
            2 hour party with 1 host = $320
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
          <h3>Up to 20 - 25 kids:</h3>
          <Radio
            name="type"
            value="25|1|2|325"
            onClickRadio={e => this.updateSelectedPackage('25|1|2|325')}
            checked={this.state.selectedPackage === '25|1|2|325'}
            large
          >
            1 hour part with 2 hosts = $325
          </Radio>
          <Indented>
            <h6>Includes 2 of the following</h6>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageFacePainting', 0)
              }
              checked={!!this.getOptionValue('packageFacePainting')}
            >
              Face painting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e =>
                this.updateOptions('packageBalloonTwisting', 0)
              }
              checked={!!this.getOptionValue('packageBalloonTwisting')}
            >
              Balloon Twisting
            </Checkbox>
            <Checkbox
              onClickCheckbox={e => this.updateOptions('packageGames', 0)}
              checked={!!this.getOptionValue('packageGames')}
            >
              Musical games and obstacle courses which all the kids can enjoy
              together
            </Checkbox>
            <p>&bull; PLUS a gift bag for each child to take home</p>
          </Indented>
          <Radio
            name="type"
            value="25|2|2|425"
            onClickRadio={e => this.updateSelectedPackage('25|2|2|425')}
            checked={this.state.selectedPackage === '25|2|2|425'}
            large
          >
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
          <h3>More than 25 kids:</h3>
          <p>
            No problem! <Link to="/contact-us">Contact us</Link> today for a
            customised quote.
          </p>
        </General>
      </EnquiryBlock>
    )
  }
}

export default CompleteEntertainmentPackages
