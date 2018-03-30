import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import hexRgb from 'hex-rgb'

import { colors } from '../../styles/vars'


export default (props) => (
	<Item>
		<A to="/">
			{props.children}
		</A>
	</Item>
)


const Item = styled.li`
	list-style: none;
	height: 100%;
	display: block;
	margin: 0;
	text-align: center;
`

const A = styled(Link)`
	display: inline-block;
	height: 100%;
	width: auto;
	padding: 0 1.5em;
	font-size: 1.8em;
	white-space: nowrap;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	background: rgba(${hexRgb(colors.primary, {format: 'array'}).slice(0, 3).join(',')}, 0.7);
	color: white;
	text-decoration: none;
	font-family: 'BrandonGrotesqueWeb-Bold';
	&:hover {
		background: ${colors.secondary};
	}

	@media all and (max-width: 1030px) {
		padding: 0 0.5em;
	}
`