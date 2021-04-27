// Constants and Main Modules
import React from 'react';

// Style Sheets
import './search-box.styles.css';

export const SearchBox = ({placeholderText, handleChange}) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholderText}
            onChange={handleChange}
        ></input>
    );
};