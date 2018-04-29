import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/theme'
import Arrow from '../Arrow'
import Heading from '../Heading'

class EnquiryBlock extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      offsetHeight: 0,
    }
  }

  componentDidMount() {
    let offsetHeight = this.content.offsetHeight
    this.setState({ offsetHeight })
  }
  toggleExpander(e) {
    e.preventDefault()

    let open = !this.state.open
    this.setState({ open })
  }

  render() {
    return (
      <Container>
        <Header background={this.props.headerBackground}>
          <Toggle
            up={!this.state.open}
            down={this.state.open}
            onClick={this.toggleExpander.bind(this)}
          />
          <Heading>{this.props.title}</Heading>
        </Header>
        <Expander innerHeight={this.state.offsetHeight} open={this.state.open}>
          <InnerContent innerRef={el => (this.content = el)}>
            {this.props.children}
          </InnerContent>
        </Expander>
      </Container>
    )
  }
}
export default EnquiryBlock

const Toggle = styled(Arrow)`
  position: absolute;
  top: 1.5em;
  right: 0;
`

const Expander = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.4s linear;
  ${props =>
    props.open &&
    `
    height: ${props.innerHeight}px;
  `};
`
const InnerContent = styled.div`
  width: 100%;
  padding: 0 0 4em;
  font-size: 1.6em;
  text-align: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 80em;
  border-radius: 12px;
  border: 1px solid ${colors.primary};
  padding: 1em 2.5em 2.5em 2.5em;
  box-sizing: border-box;
  margin-bottom: 7em;
`

const Header = styled.header`
  width: 100%;
  position: relative;
  background-image: url(${props => props.background});
  padding-top: 8em;
  background-size: 200px;
  background-position: center top;
  background-repeat: no-repeat;
`
