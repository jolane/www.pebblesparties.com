import React from 'react'
import styled from 'styled-components'


export default ({height}) => (
	<Spacer height={height} />
)

const Spacer = styled.div`
	width: 100%;
	height: ${props => props.height}px;
`