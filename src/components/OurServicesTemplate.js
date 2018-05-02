import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Nav from './Navigation'
import Banner from './Banner'
import Heading from './Heading'
import SubHeading from './SubHeading'
import General from './General'
import Spacer from './Spacer'
import StartPlanningPanel from './StartPlanningPanel'

export default props => (
  <Wrapper>
    <Nav />
    <Banner />
    <Heading image={props.image}>{props.title}</Heading>
    {Array.isArray(props.subTitle) ? (
      props.subTitle.map(item => <SubHeading>{item}</SubHeading>)
    ) : (
      <SubHeading>{props.subTitle}</SubHeading>
    )}

    <Spacer height={50} />
    <Grid>
      <div>
        <General>{props.children}</General>
      </div>
      <div>
        <StartPlanningPanel />
      </div>
    </Grid>
    <Spacer height={50} />
  </Wrapper>
)

const Wrapper = styled.section`
  position: relative;
`

const Grid = styled.div`
  width: 95%;
  max-width: 118em;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(auto, 50em) 35em;
  justify-content: space-between;
  grid-column-gap: 8em;
`
