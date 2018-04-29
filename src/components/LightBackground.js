import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'

export default ({ children }) => (
	<Section>
		{children}
	</Section>
)

const Section = styled.section`
	padding: 2em 0;
	background: ${colors.light};
`