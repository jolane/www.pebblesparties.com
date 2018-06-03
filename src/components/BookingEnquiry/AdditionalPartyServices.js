import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { get } from 'lodash'

import EnquiryBlock from '../EnquiryBlock'
import Radio from '../Radio'
import Checkbox from '../Checkbox'
import General from '../General'
import Spacer from '../Spacer'

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
class AdditionalPartyServices extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.updateOptions = this.updateOptions.bind(this)
    this.findOptionInProps = this.findOptionInProps.bind(this)
    this.renderSection = this.renderSection.bind(this)
  }
  updateOptions(type, value) {
    let val = null
    if (this.state[type] === undefined) {
      val = value
    } else if (this.state[type] != value) {
      val = value
    } else {
      val = null
    }
    this.setState({ [type]: val })
    this.props.updateOption(type, value)
  }

  findOptionInProps(optionName) {
    return this.props.currentOptions.find(option => option.name === optionName)
  }

  renderSection(optionName) {
    const theOption = this.props.currentOptions.find(
      option => option.name === optionName
    )
    if (!theOption) {
      return true
    } else if (theOption.value === 0) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <EnquiryBlock
        headerBackground="/images/services-additional.png"
        title="Additional Party Services"
      >
        <p>
          The list below outlines the party services that we can add-on to any
          of the Complete Entertainment Packages. We can also provide any of the
          below party services on a stand-alone basis.
        </p>
        <Spacer height={20} />
        {this.renderSection('packageFacePainting') && (
          <div>
            <General>
              <h5>Face Painting:</h5>
            </General>
            <Spacer height={10} />
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions(
                          'additionalFacePainting',
                          140,
                          'Addition Face Painting 1 Hour'
                        )
                      }
                      checked={
                        get(
                          this.findOptionInProps('additionalFacePainting'),
                          `value`
                        ) === 140
                      }
                    >
                      1 hour
                    </Radio>
                  </td>
                  <td>(recommended max 20 kids)</td>
                  <td>$140</td>
                </tr>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions(
                          'additionalFacePainting',
                          180,
                          'Addition Face Painting 1.5 Hour'
                        )
                      }
                      checked={
                        get(
                          this.findOptionInProps('additionalFacePainting'),
                          `value`
                        ) === 180
                      }
                    >
                      1.5 hours
                    </Radio>
                  </td>
                  <td>(recommended max 25 kids)</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions(
                          'additionalFacePainting',
                          220,
                          'Addition Face Painting 2 Hour'
                        )
                      }
                      checked={
                        get(
                          this.findOptionInProps('additionalFacePainting'),
                          `value`
                        ) === 220
                      }
                    >
                      2 hours
                    </Radio>
                  </td>
                  <td>(+30 kids)</td>
                  <td>$220</td>
                </tr>
              </tbody>
            </Table>
            <Spacer height={20} />
          </div>
        )}
        {this.renderSection('packageBalloonTwisting') && (
          <div>
            <General>
              <h5>Balloon twisting:</h5>
            </General>
            <Spacer height={10} />
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions('additionalBalloonTwisting', 140)
                      }
                      checked={this.state.additionalBalloonTwisting === 140}
                    >
                      1 hour
                    </Radio>
                  </td>
                  <td>(recommended max 20 kids)</td>
                  <td>$140</td>
                </tr>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions('additionalBalloonTwisting', 180)
                      }
                      checked={this.state.additionalBalloonTwisting === 180}
                    >
                      1.5 hours
                    </Radio>
                  </td>
                  <td>(recommended max 25 kids)</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>
                    <Radio
                      onClickRadio={e =>
                        this.updateOptions('additionalBalloonTwisting', 220)
                      }
                      checked={this.state.additionalBalloonTwisting === 220}
                    >
                      2 hours
                    </Radio>
                  </td>
                  <td>(+30 kids)</td>
                  <td>$220</td>
                </tr>
              </tbody>
            </Table>
            <Spacer height={20} />
          </div>
        )}
        <General>
          <h5>Take-home goodies for the kids:</h5>
        </General>
        <Spacer height={10} />
        <General left>
          <p>
            How many kids (roughly)?*
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 5)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 5}
            >
              5
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 10)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 10}
            >
              10
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 15)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 15}
            >
              15
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 20)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 20}
            >
              20
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 25)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 25}
            >
              25
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodiesMultiplier', 30)
              }
              checked={this.state.additionalTakeHomeGoodiesMultiplier === 30}
            >
              30
            </Radio>
          </p>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Radio
                    onClickRadio={e =>
                      this.updateOptions('additionalTakeHomeGoodies', 10)
                    }
                    checked={this.state.additionalTakeHomeGoodies === 10}
                  >
                    Custom gift bags with name labels and extra goodies
                  </Radio>
                </td>
                <td>$10 per head</td>
              </tr>
              <tr>
                <td>
                  <Radio
                    onClickRadio={e =>
                      this.updateOptions('additionalTakeHomeGoodies', 2)
                    }
                    checked={this.state.additionalTakeHomeGoodies === 2}
                  >
                    Helium balloon for each child
                  </Radio>
                </td>
                <td>$2 per head</td>
              </tr>
            </tbody>
          </Table>
        </General>

        <Spacer height={20} />
        <General>
          <h5>Costumes and character appearance:</h5>
        </General>
        <Spacer height={10} />
        <Table>
          <tbody>
            <tr>
              <td>
                <Checkbox
                  onClickCheckbox={e =>
                    this.updateOptions('additionalDressupProps', 100)
                  }
                  checked={this.state.additionalDressupProps === 100}
                >
                  Themed dressing up props (masks, capes, fairy wings etc.)
                </Checkbox>
              </td>
              <td>$100</td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  onClickCheckbox={e =>
                    this.updateOptions(
                      'additionalDressupCharacterAppearance',
                      150
                    )
                  }
                  checked={
                    this.state.additionalDressupCharacterAppearance === 150
                  }
                >
                  Themed costume character appearance
                </Checkbox>
              </td>
              <td>$150</td>
            </tr>
          </tbody>
        </Table>
      </EnquiryBlock>
    )
  }
}
export default AdditionalPartyServices
