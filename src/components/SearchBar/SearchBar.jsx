import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Key from '../apikey'

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const search = () => {
        const {data} = (this.props.getVideos)
    }

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
