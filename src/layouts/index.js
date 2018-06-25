import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import theme, { colors } from '../styles/theme'

injectGlobal`
  @font-face {font-family: 'MuseoSans-700';src: url('/webfonts/360C64_0_0.eot');src: url('/webfonts/360C64_0_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_0_0.woff2') format('woff2'),url('/webfonts/360C64_0_0.woff') format('woff'),url('/webfonts/360C64_0_0.ttf') format('truetype'),url('/webfonts/360C64_0_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-300';src: url('/webfonts/360C64_1_0.eot');src: url('/webfonts/360C64_1_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_1_0.woff2') format('woff2'),url('/webfonts/360C64_1_0.woff') format('woff'),url('/webfonts/360C64_1_0.ttf') format('truetype'),url('/webfonts/360C64_1_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-900Italic';src: url('/webfonts/360C64_2_0.eot');src: url('/webfonts/360C64_2_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_2_0.woff2') format('woff2'),url('/webfonts/360C64_2_0.woff') format('woff'),url('/webfonts/360C64_2_0.ttf') format('truetype'),url('/webfonts/360C64_2_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-500';src: url('/webfonts/360C64_3_0.eot');src: url('/webfonts/360C64_3_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_3_0.woff2') format('woff2'),url('/webfonts/360C64_3_0.woff') format('woff'),url('/webfonts/360C64_3_0.ttf') format('truetype'),url('/webfonts/360C64_3_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-100';src: url('/webfonts/360C64_4_0.eot');src: url('/webfonts/360C64_4_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_4_0.woff2') format('woff2'),url('/webfonts/360C64_4_0.woff') format('woff'),url('/webfonts/360C64_4_0.ttf') format('truetype'),url('/webfonts/360C64_4_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-700Italic';src: url('/webfonts/360C64_5_0.eot');src: url('/webfonts/360C64_5_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_5_0.woff2') format('woff2'),url('/webfonts/360C64_5_0.woff') format('woff'),url('/webfonts/360C64_5_0.ttf') format('truetype'),url('/webfonts/360C64_5_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-300Italic';src: url('/webfonts/360C64_6_0.eot');src: url('/webfonts/360C64_6_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_6_0.woff2') format('woff2'),url('/webfonts/360C64_6_0.woff') format('woff'),url('/webfonts/360C64_6_0.ttf') format('truetype'),url('/webfonts/360C64_6_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-100Italic';src: url('/webfonts/360C64_7_0.eot');src: url('/webfonts/360C64_7_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_7_0.woff2') format('woff2'),url('/webfonts/360C64_7_0.woff') format('woff'),url('/webfonts/360C64_7_0.ttf') format('truetype'),url('/webfonts/360C64_7_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-500Italic';src: url('/webfonts/360C64_8_0.eot');src: url('/webfonts/360C64_8_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_8_0.woff2') format('woff2'),url('/webfonts/360C64_8_0.woff') format('woff'),url('/webfonts/360C64_8_0.ttf') format('truetype'),url('/webfonts/360C64_8_0.svg#wf') format('svg');}
  @font-face {font-family: 'MuseoSans-900';src: url('/webfonts/360C64_9_0.eot');src: url('/webfonts/360C64_9_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C64_9_0.woff2') format('woff2'),url('/webfonts/360C64_9_0.woff') format('woff'),url('/webfonts/360C64_9_0.ttf') format('truetype'),url('/webfonts/360C64_9_0.svg#wf') format('svg');}

  @font-face {font-family: 'BrandonGrotesqueWeb-BoldItalic';src: url('/webfonts/360C65_0_0.eot');src: url('/webfonts/360C65_0_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C65_0_0.woff2') format('woff2'),url('/webfonts/360C65_0_0.woff') format('woff'),url('/webfonts/360C65_0_0.ttf') format('truetype'),url('/webfonts/360C65_0_0.svg#wf') format('svg');}
  @font-face {font-family: 'BrandonGrotesqueWeb-Bold';src: url('/webfonts/360C65_1_0.eot');src: url('/webfonts/360C65_1_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C65_1_0.woff2') format('woff2'),url('/webfonts/360C65_1_0.woff') format('woff'),url('/webfonts/360C65_1_0.ttf') format('truetype'),url('/webfonts/360C65_1_0.svg#wf') format('svg');}
  @font-face {font-family: 'BrandonGrotesqueWeb-Regular';src: url('/webfonts/360C65_2_0.eot');src: url('/webfonts/360C65_2_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C65_2_0.woff2') format('woff2'),url('/webfonts/360C65_2_0.woff') format('woff'),url('/webfonts/360C65_2_0.ttf') format('truetype'),url('/webfonts/360C65_2_0.svg#wf') format('svg');}
  @font-face {font-family: 'BrandonGrotesqueWeb-Italic';src: url('/webfonts/360C65_3_0.eot');src: url('/webfonts/360C65_3_0.eot?#iefix') format('embedded-opentype'),url('/webfonts/360C65_3_0.woff2') format('woff2'),url('/webfonts/360C65_3_0.woff') format('woff'),url('/webfonts/360C65_3_0.ttf') format('truetype'),url('/webfonts/360C65_3_0.svg#wf') format('svg');}


  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    line-height: 1.3;
    font-weight: 100;
    font-family: 'MuseoSans-100', san-serif;
    color: ${colors.black};
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Pebbles Parties"
        meta={[
          {
            name: 'description',
            content:
              "Professional and highly-trained kids' party entertainment. Facepainting, balloons, games, catering and more! Custom packages to suit all occasions and budget.",
          },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div>{children()}</div>
      <Footer />
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
