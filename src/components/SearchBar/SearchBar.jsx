import React, { useState, useEffect } from 'react'
import Key from '../apikey'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

    // search? //
  // q=searchterm
  // type=video&
  // key=key&
  // part=snippet
  useEffect(() => {
    const search = () => {
      const {data} = (props.getVideos, {
        params: {
          q: searchTerm,
          type: 'video',
          key: Key,
          part: 'snippet'
        },
      })
      setSearchResults(data)
    }

    if (searchTerm) {
        search()
    }
        
    })
    

    return(
      <div>
        <div className="form">
          <div className="field">
            <label>Search</label>
            <input 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="input"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    )
}

export default SearchBar;
