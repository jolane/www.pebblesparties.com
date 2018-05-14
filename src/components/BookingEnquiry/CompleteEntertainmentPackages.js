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
    }

    this.updateSelectedPackage = this.updateSelectedPackage.bind(this)
    this.updateIncludes1 = this.updateIncludes1.bind(this)
    this.updateIncludes2 = this.updateIncludes2.bind(this)
  }

  updateSelectedPackage(selectedPackage) {
    this.setState({ selectedPackage })

    const parts = selectedPackage.split('|')

    this.props.updateNumberOfChildren(parseInt(parts[0], 10))
    this.props.updatePackageCost(parseInt(parts[3], 10))
  }

  updateIncludes1(value) {
    if (this.state.selectedIncludes1.includes(value)) {
      this.setState({
        selectedIncludes1: this.state.selectedIncludes1.filter(v => v != value),
      })
    } else if (this.state.selectedIncludes1.length === 2) {
      alert('You can only select 2 options')
    } else {
      this.setState({
        selectedIncludes1: [...this.state.selectedIncludes1, value],
      })
    }
  }

  updateIncludes2(value) {
    if (this.state.selectedIncludes2.includes(value)) {
      this.setState({
        selectedIncludes2: this.state.selectedIncludes2.filter(v => v != value),
      })
    } else if (this.state.selectedIncludes2.length === 2) {
      alert('You can only select 2 options')
    } else {
      this.setState({
        selectedIncludes2: [...this.state.selectedIncludes2, value],
      })
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
          <h3>Up to 15 kids:</h3>
          <Radio
            name="type"
            value="15|1|1|200"
            onClickRadio={e => this.updateSelectedPackage('15|1|1|200')}
            checked={this.state.selectedPackage === '15|1|1|200'}
            large
          >
            1 hour part with 1 host = $200
          </Radio>
          <Indented>
            <h6>Includes 2 of the following</h6>
            <Checkbox
              value="Face Painting"
              checked={this.state.selectedIncludes1.includes('Face Painting')}
              onClickCheckbox={() => this.updateIncludes1('Face Painting')}
            >
              Face painting
            </Checkbox>
            <Checkbox
              value="Balloon Twisting"
              checked={this.state.selectedIncludes1.includes(
                'Balloon Twisting'
              )}
              onClickCheckbox={() => this.updateIncludes1('Balloon Twisting')}
            >
              Balloon Twisting
            </Checkbox>
            <Checkbox
              value="Musical games and obstacle courses which all the kids can enjoy together"
              checked={this.state.selectedIncludes1.includes(
                'Musical games and obstacle courses which all the kids can enjoy together'
              )}
              onClickCheckbox={() =>
                this.updateIncludes1(
                  'Musical games and obstacle courses which all the kids can enjoy together'
                )
              }
            >
              Musical games and obstacle courses which all the kids can enjoy
              together
            </Checkbox>
            <p>&bull; PLUS a gift bag for each child to take home</p>
          </Indented>
          <Radio
            name="type"
            value="15|2|1|280"
            onClickRadio={e => this.updateSelectedPackage('15|2|1|280')}
            checked={this.state.selectedPackage === '15|2|1|280'}
            large
          >
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
              value="Face Painting"
              checked={this.state.selectedIncludes2.includes('Face Painting')}
              onClickCheckbox={() => this.updateIncludes2('Face Painting')}
            >
              Face painting
            </Checkbox>
            <Checkbox
              value="Balloon Twisting"
              checked={this.state.selectedIncludes2.includes(
                'Balloon Twisting'
              )}
              onClickCheckbox={() => this.updateIncludes2('Balloon Twisting')}
            >
              Balloon Twisting
            </Checkbox>
            <Checkbox
              value="Musical games and obstacle courses which all the kids can enjoy together"
              checked={this.state.selectedIncludes2.includes(
                'Musical games and obstacle courses which all the kids can enjoy together'
              )}
              onClickCheckbox={() =>
                this.updateIncludes2(
                  'Musical games and obstacle courses which all the kids can enjoy together'
                )
              }
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
          <h3>More than 30 kids:</h3>
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
