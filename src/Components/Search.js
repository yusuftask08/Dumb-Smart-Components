import React from 'react'

const Search = ({ onSearch, val }) => {
    return (
        <input
            value={val}
            onChange={onSearch}
            placeholder='kitap ara..'
        />
    )
}

export default Search