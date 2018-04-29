import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default props => <Container {...props}> {props.children} </Container>

const Container = styled.div`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${colors.black};
  text-align: left;
  ${props =>
    props.center &&
    `
    text-align: center;
  `};
  ${props =>
    props.larger &&
    `
    font-size: 1.6rem;
  `};

  h3 {
    color: ${colors.primary};
    font-size: 2.8em;
    font-family: 'BrandonGrotesqueWeb-Bold';
    font-weight: normal;
    margin: 0 0 0.5em 0;
    line-height: 1;
    &.dark {
      color: ${colors.secondary};
    }
  }

  * + h3 {
    margin-top: 1.2em;
  }

  h5 {
    color: ${colors.secondary};
    font-family: 'BrandonGrotesqueWeb-Bold';
    font-size: 1.6em;
    font-weight: normal;
    margin: 0 0 0.3em 0;
    line-height: 1;
    &.light {
      color: ${colors.primary};
    }
  }

  * + h5 {
    margin-top: 1.2em;
  }

  h6 {
    font-size: 1.2em;
    font-family: 'BrandonGrotesqueWeb-Bold';
    color: ${colors.black};
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 0 0 1em 0;
    strong {
      font-family: 'MuseoSans-500';
    }
    &.note {
      font-size: 0.7em;
    }
    & > span {
      float: right;
    }
  }

  ul {
    padding: 0 0 0 1em;
    margin: 0;
  }

  li {
    margin: 0 0 0.5em 0;
  }

  table {
    border: none;
    width: 100%;
  }
  tr {
    height: 2.5em;
  }
  td {
    text-align: left
    &:last-child {
      text-align: right;
    }
  }
`
