import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import media from '../styles/media'

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
    <Banner image={props.banner} />
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
  width: 94%;
  max-width: 118em;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(auto, 50em) 35em;
  justify-content: space-between;
  grid-column-gap: 8em;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    &>*:last-child {
      margin-top: 3vw;
    }
  `};
`
