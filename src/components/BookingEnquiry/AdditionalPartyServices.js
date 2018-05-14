import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

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
    console.log(val)
    this.setState({ [type]: val })
    this.props.updateOption(type, value)
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
        <General>
          <h5>Face Painting:</h5>
        </General>
        <Spacer height={10} />
        <Table>
          <tr>
            <td>
              <Radio
                onClickRadio={e =>
                  this.updateOptions('additionalFacePainting', 140)
                }
                checked={this.state.additionalFacePainting === 140}
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
                  this.updateOptions('additionalFacePainting', 180)
                }
                checked={this.state.additionalFacePainting === 180}
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
                  this.updateOptions('additionalFacePainting', 220)
                }
                checked={this.state.additionalFacePainting === 220}
              >
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
        </Table>
        <Spacer height={20} />
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
                this.updateOptions('additionalTakeHomeGoodies', 5)
              }
              checked={this.state.additionalTakeHomeGoodies === 5}
            >
              5
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodies', 10)
              }
              checked={this.state.additionalTakeHomeGoodies === 10}
            >
              10
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodies', 15)
              }
              checked={this.state.additionalTakeHomeGoodies === 15}
            >
              15
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodies', 20)
              }
              checked={this.state.additionalTakeHomeGoodies === 20}
            >
              20
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodies', 25)
              }
              checked={this.state.additionalTakeHomeGoodies === 25}
            >
              25
            </Radio>
            <Radio
              inline
              onClickRadio={e =>
                this.updateOptions('additionalTakeHomeGoodies', 30)
              }
              checked={this.state.additionalTakeHomeGoodies === 30}
            >
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
        </Table>
      </EnquiryBlock>
    )
  }
}
export default AdditionalPartyServices
