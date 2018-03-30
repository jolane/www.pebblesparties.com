import React from 'react'
import styled from 'styled-components'
import { path } from 'ramda'

const types = {
	facebook: (
		<svg width="78" height="78" viewBox="0 0 78 78">
		<g fill="none" fillRule="evenodd">
			<path d="M29.578 32.402h4.028v-3.915c0-1.726.044-4.388 1.298-6.037 1.321-1.746 3.134-2.933 6.253-2.933 5.082 0 7.222.725 7.222.725l-1.007 5.967s-1.679-.485-3.245-.485c-1.567 0-2.97.562-2.97 2.128v4.55h6.424l-.448 5.83h-5.976v20.25h-7.55v-20.25h-4.029v-5.83z" fill="#FFFFFE"/>
		</g>
		</svg>
	),
	instagram: (
		<svg width="78" height="78" viewBox="0 0 78 78">
		<g fill="none" fillRule="evenodd">
			<path d="M50.956 19.518H27.053c-4.152 0-7.53 3.377-7.53 7.53v23.904c0 4.153 3.378 7.53 7.53 7.53h23.903c4.152 0 7.531-3.377 7.531-7.53V27.047c0-4.152-3.379-7.529-7.53-7.529zm2.161 4.491l.863-.003v6.604l-6.585.021-.023-6.604 5.745-.018zM33.447 35.001c1.245-1.728 3.27-2.859 5.56-2.859 2.288 0 4.313 1.131 5.559 2.86.815 1.126 1.3 2.505 1.3 3.998 0 3.781-3.079 6.857-6.86 6.857-3.78 0-6.858-3.076-6.858-6.857 0-1.493.486-2.872 1.299-3.999zM54.69 50.952c0 2.06-1.674 3.733-3.735 3.733H27.053c-2.06 0-3.733-1.673-3.733-3.733v-15.95h5.817c-.503 1.235-.785 2.584-.785 3.998 0 5.874 4.778 10.655 10.653 10.655 5.875 0 10.653-4.78 10.653-10.655 0-1.414-.284-2.763-.785-3.999h5.818v15.951z" fill="#FFFFFE"/>
		</g>
		</svg>
	),
	youtube: (
		<svg width="78" height="78" viewBox="0 0 78 78">
		<g fill="none" fillRule="evenodd">
			<path d="M61.724 46.52c0 7.25-7.25 7.25-7.25 7.25H26.908c-7.245 0-7.245-7.25-7.245-7.25V31.48c0-7.25 7.245-7.25 7.245-7.25h27.566c7.25 0 7.25 7.25 7.25 7.25v15.04zm-26.636.59l13.771-8.09-13.77-8.088V47.11z" fill="#FFFFFE"/>
		</g>
		</svg>
	)
}


export default (props) => (
	<Icon href={props.href} title={props.title} target="_blank">
		{types[props.type]}
	</Icon>
)

const Icon = styled.a`
	display: inline-block;
	height: 4.8em;
	width: 4.8em;
	background: black;
	background: ${props => path(['theme', 'SocialMediaIcon', 'background'], props)};
	border-radius: 50%;
	transition: all 0.1s linear;

	&:hover {
		background: grey;
		background: ${props => path(['theme', 'SocialMediaIcon', 'hover'], props)};
	}

	&:active {
		transform: scale(0.95);
	}

	> svg {
		height: 100%;
		width: 100%;
	}
`