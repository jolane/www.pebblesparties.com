import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

export default (props) => (
	<Arrow {...props} />
)

const Arrow = styled.button`
	display: block;
	height: 4.5em;
	width: 4.5em;
	border-radius: 0.2em;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	border: 0;
	margin: 0;
	cursor: pointer;
	transition: all 0.1s linear;
	margin: 0.2em;

	&:after {
		content: '';
		display: block;
		height: 1.8em;
		width: 1.8em;
		border-top: 1px solid #fff;
		border-left: 1px solid #fff;
		transform: rotate(135deg);
		margin-left: -0.9em;
		box-sizing: border-box;

		${props => props.up && `
			transform: rotate(45deg);
			margin: 0 0 -0.9em 0;
		`}

		${props => props.down && `
			transform: rotate(-135deg);
			margin: -0.9em 0 0 0;
		`}

		${props => props.left && `
			transform: rotate(-45deg);
			margin: 0 -0.9em 0 0;
		`}
	}

	&:hover {
		background-color: #4A4A4A;
		background: ${props => R.path(['theme', 'Arrow', 'hover'], props) };
	}

	&:active {
		transform: scale(0.95);
	}
	background: black;
	background: ${props => R.path(['theme', 'Arrow', 'background'], props) };
`