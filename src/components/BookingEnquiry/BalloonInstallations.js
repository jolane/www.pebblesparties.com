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
const Table = styled.table`
  width: 90%;
  td {
    text-align: left;
  }
  td:last-child {
    text-align: right;
  }
`

class BalloonInstallations extends React.Component {
  constructor(props) {
    super(props)
    this.updateOptions = this.updateOptions.bind(this)
    this.getOptionValue = this.getOptionValue.bind(this)
  }

  updateOptions(type, value) {
    let val = null
    if (this.props.currentOptions[type] === undefined) {
      val = value
    } else if (this.props.currentOptions[type] != value) {
      val = value
    } else {
      val = null
    }
    this.props.updateOption(type, value)
  }

  getOptionValue(name) {
    const item = this.props.currentOptions.find(item => item.name === name)
    if (item) {
      return item.value
    } else {
      return null
    }
  }

  render() {
    return (
      <EnquiryBlock
        headerBackground="/images/services-balloon.png"
        title="Balloon Installations"
      >
        <p>
          Balloon installations can make all the difference to your party venue
          by adding that splash of colour and a personalised touch. We design a
          wide range of balloon arrangements to suit any occasion- garlands,
          arches, stand-alone displays and more.
        </p>
        <p>
          Below are a few of our classic designs, but please contact us if you'd
          like more details on our personalised installation options.
        </p>
        <Table>
          <tbody>
            <tr>
              <td colSpan="2">
                <Checkbox
                  onClickCheckbox={e => this.updateOptions('ballonArch', 400)}
                  checked={!!this.getOptionValue('ballonArch')}
                >
                  Balloon arch
                </Checkbox>
              </td>
              <td>$400</td>
            </tr>
            <tr>
              <td colSpan="2">
                <Checkbox
                  onClickCheckbox={e =>
                    this.updateOptions('balloonDisplay', 400)
                  }
                  checked={!!this.getOptionValue('balloonDisplay')}
                >
                  Helium balloon displays
                </Checkbox>
              </td>
              <td>$400</td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  onClickCheckbox={e => this.updateOptions('jumboBalloons', 35)}
                  checked={!!this.getOptionValue('jumboBalloons')}
                >
                  JUMBO helium balloons
                </Checkbox>
              </td>
              <td>
                {[1, 2, 3, 4, 5].map(v => (
                  <Radio
                    onClickRadio={e =>
                      this.updateOptions('jumboBalloonsMultiplier', v)
                    }
                    key={v}
                    checked={
                      this.getOptionValue('jumboBalloonsMultiplier') === v
                    }
                    inline
                  >
                    {v}
                  </Radio>
                ))}
              </td>
              <td>$35 each</td>
            </tr>
          </tbody>
        </Table>
        <General>
          <p>
            *Price to be determined according to size, theme and type of frame
            required for installation.
          </p>
        </General>
      </EnquiryBlock>
    )
  }
}

export default BalloonInstallations
