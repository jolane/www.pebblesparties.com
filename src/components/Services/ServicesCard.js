import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from '../../styles/theme'
import media from '../../styles/media'

export default props => (
  <Card {...props}>
    {props.name}
    {props.full && (
      <Extra>
        <h3>Includes</h3>
        <ul>{props.list.map(item => <li>{item}</li>)}</ul>
        <p>Find out more</p>
      </Extra>
    )}
  </Card>
)

const Card = styled(Link)`
	padding: 34% 1.5em 1.5em;
	box-sizing: border-box;
	background: ${colors.primary};
	color: ${colors.white};
	text-decoration: none;
	border-radius: 0.5em;
	text-align: center;
	font-family: 'BrandonGrotesqueWeb-Bold';
	font-size: 4em;
	line-height: 1.05;
	background-image: url('/images/${props => props.img}');
	background-size: 60%;
	background-position: 50% 0.5em;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${colors.secondary};
		background-image: url('/images/${props => props.hover}');
	}
  ${media.tablet`
    margin-bottom: 3vw;
  `};
`

const Extra = styled.div`
  font-family: 'MuseoSans-100';
  font-size: 16px;

  h3 {
    font-family: 'MuseoSans-500';
    margin: 1.2em 0 0.5em 0;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    list-style-position: inside;
    margin-bottom: 1em;
    &:before {
      content: '•';
      display: inline-block;
      margin: 0 0.3em 0 0;
    }
  }
  p {
    margin-top: 2em;
    font-size: 1.2em;
    font-family: 'MuseoSans-500';
    text-decoration: underline;
  }
`
