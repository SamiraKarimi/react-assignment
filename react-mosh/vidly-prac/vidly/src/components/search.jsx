import React from 'react';
const SearchMovie = ({onSearchChange,searchedMovie}) => {
    return (
       <div style={{textAlign:'center'}}>
           <label htmlFor="search"><input type="Search" id='search' placeholder='Search Movies...' 
            onChange = {e => onSearchChange(e.target.value)}/></label>
       </div>
    )
}

export default SearchMovie;