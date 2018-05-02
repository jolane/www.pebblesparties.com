import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { rgba } from 'polished'
import slugify from 'slugify'

import { colors } from '../../styles/theme'

export default props => {
  const navItem =
    props.children instanceof Array ? props.children[0] : props.children
  const subItems =
    props.children instanceof Array ? props.children.slice(1) : null
  return (
    <Item>
      <A
        to={`/${slugify(navItem, { lower: true })}`}
        title={navItem}
        activeClassName="is-active"
      >
        {navItem}
      </A>
      {subItems && (
        <SubNav>
          {subItems.map(item => (
            <A
              key={item}
              to={`/${slugify(navItem, { lower: true })}/${slugify(item, {
                lower: true,
              })}`}
              title={item}
              activeClassName="is-active"
              sub
            >
              {item}
            </A>
          ))}
        </SubNav>
      )}
    </Item>
  )
}

const Item = styled.li`
  list-style: none;
  height: 100%;
  display: block;
  margin: 0;
  text-align: center;
  position: relative;
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
  background: ${rgba(colors.primary, 0.7)};
  color: white;
  text-decoration: none;
  font-family: 'BrandonGrotesqueWeb-Bold';
  &:hover,
  &.is-active {
    background: ${colors.secondary};
  }

  @media all and (max-width: 1030px) {
    padding: 0 0.5em;
  }

  ${props =>
    props.sub &&
    `
    width: 100%;
    height: auto;
    white-space: normal;
    padding: 0.6em;
    box-sizing: border-box;
    margin-top: 1px;
    line-height: 1;
    @media all and (max-width: 1030px) {
      padding: 0.5em;
    }
  `};
`

const SubNav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  *:hover > & {
    opacity: 1;
    visibility: visible;
  }
`
