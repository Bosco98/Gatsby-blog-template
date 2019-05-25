import React, { Component } from "react"
import PropTypes from "prop-types"
import { Index } from "elasticlunr"

import { Link } from "gatsby"
import './search.css'
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <div style={{
          color:'White',
          paddingLeft:'1em',
          fontWieght:'bold',
          fontStyle:'italic',
        }} >
          Search: 
          &nbsp;
          &nbsp;
        <input
          style={{
            position: `center`,
          }}
          type="text"
          placeholder="Type title words or tags"
          value={this.state.query}
          onChange={this.search}
          />
          </div>
        <ul
        className="myUL"
          style={{
            position: `absolute`,
            backgroundColor: `white`,
            marginLeft: `3em`,
            
          }}
        >
          {this.state.results.map(page => (
            <li 
            style={{
              paddingBottom:'5px',
              fontSize:'25px',
              TextDecoder:'none',
            }}
            key={page.id}>
              <Link to={`/` + page.path}>{page.title}
              <small>
              	{` ,Tags: ` + page.tags.join(`,`)}
              </small> 
              </Link>
          <hr/>
            </li>
          ))}

        </ul>
      </div>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

Search.propTypes = {
  searchIndex: PropTypes.object,
}
