import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.img`
  display: block;
  width: 100%;
`

const Banner = ({ image, alt }) => <Wrapper src={image} alt={alt} />

Banner.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
}

Banner.defaultProps = {
  image: '/images/secondary_banner.jpg',
}

export default Banner
