import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import SocialMediaIcons from '../SocialMediaIcon'
import { colors, sizes } from '../../styles/theme'
import { items } from '../Navigation'
import ConactForm from '../ContactForm'



export default (props) => (
	<Footer>
		<Inner>
			<div className="col">
				<Heading>Send us an enquiry</Heading>
				<ConactForm footer />
			</div>
			<div className="col">
				<Heading>Contact us</Heading>
				<p>
					Bek Lah <span>Events Director</span><br />
					Phone: 0433 911 584<br />
					Email: <a href="mailto:pebblesparties@gmail.com">pebblesparties@gmail.com</a>
				</p>
				<Heading>Hours</Heading>
				<p>
					Parties 9am–6pm<br />
					Enquiries 8.30am–7pm
				</p>
			</div>
			<div className="col">
				<Heading>Site links</Heading>
				<ul>
					{items.map((v, i) => (
						<li key={i}>
							{v}
						</li>
					))}
				</ul>
			</div>
			<div className="col">
				<Heading>Let’s get social!</Heading>
				<SocialMediaIcons href="http://facebook.com" title="Facebook" type="facebook" />
				<SocialMediaIcons href="http://facebook.com" title="Instagram" type="instagram" />
				<SocialMediaIcons href="http://facebook.com" title="Youtube" type="youtube" />
			</div>
		</Inner>
	</Footer>
)

const Footer = styled.footer`
	background: ${colors.secondary};
	color: ${colors.white};
	padding: 3.4em 0;
`

const Inner = styled.div`
	max-width: ${sizes.maxContentWidth};
	width: 100%;
	position: relative;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1.1fr 1.2fr 1fr 0.7fr;
	grid-column-gap: 8em;

	& p {
		font-size: 1.6em;
		margin: 0 0 2em;
	}

	& ul {
		padding: 0;
		margin: 0;
	}

	& li {
		font-size: 1.6em
		margin-bottom: 0.5em;
		list-style-type: none;
		&:before {
			content: '\\203A';
			display: inline-block;
			margin-right: 0.3em;
		}
	}

	& > div:last-child {
		text-align: right;
		> a {
			margin-left: 0.5em;
		}
	}
`

const Heading = styled.h5`
	font-size: 2em;
	font-family: 'BrandonGrotesqueWeb-Bold';
	margin: 0 0 0.2em;
`

