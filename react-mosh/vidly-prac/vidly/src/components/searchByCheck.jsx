import React, { Fragment } from 'react';


const SearchByCheck = ({genres,onMultiSelect}) =>{
    return (<div style={{textAlign:'center'}}>
                {genres.map(genre =>
             <label 
             key = {genre._id} style={{margin:'10px'}}>
             <input type="checkBox" onClick = {()=>onMultiSelect(genre.name)}/>{genre.name}
             </label>
             )}
           </div>)
}

export default SearchByCheck;