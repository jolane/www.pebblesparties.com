import React from 'react'
import styled from 'styled-components'
import { path } from 'ramda'

import Item from './Item'

const array = ['Home', 'About us', 'Our Services', 'Customised Party Planning', 'Gallery', 'Booking Enquiry', 'Contact us']

export default (props) => (
	<Nav>
		<List>
			{array.map((v, i) => (
				<Item key={i}>{v}</Item>
			))}
		</List>
	</Nav>
)


const Nav = styled.nav`
	width: 100%;
	position: absolute;
	width: 100%;
	z-index: 5;
`

const List = styled.ul`
	width: 100%;
	max-width: 118em;
	position: relative;
	margin: 0 auto;
	height: 5em;
	display: grid;
	grid-gap: 1px;
	grid-auto-flow: column dense;
	grid-template-rows: 1fr;
	padding: 0;
`