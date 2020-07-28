import React from 'react';
const GenreList = ({genres,onGenreSelect,selectedGenre}) =>{
    return (
        <ul className="list-group">
        {genres.map(genre =>
            <li key = {genre._id} className={selectedGenre.name === genre.name?"list-group-item active" : "list-group-item"} onClick = {()=>onGenreSelect(genre)}>{genre.name}</li>
             )}
        </ul>
    );
}

export default GenreList;