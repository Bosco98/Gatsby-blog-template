import React from "react"
import PropTypes from "prop-types"

import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"

import Search from "./search"
import './search.css';

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: `#458555`,
          marginBottom: `1.45rem`,
          padding:`20px`
        }}
      >
        
          
          <Search searchIndex={data.siteSearchIndex.index} 
          className="search"
          />
        
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
