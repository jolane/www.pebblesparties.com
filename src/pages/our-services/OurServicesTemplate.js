import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Nav from '../../components/Navigation'
import Banner from '../../components/Banner'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'
import General from '../../components/General'
import Spacer from '../../components/Spacer'
import StartPlanningPanel from '../../components/StartPlanningPanel'

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
