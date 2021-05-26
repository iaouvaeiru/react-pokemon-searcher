import React from 'react'

const Search = props => {
  

  let searchFunction = (evt) => {
    props.handleSearch(evt.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={searchFunction} value={props.search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
