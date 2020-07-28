import React, { Fragment } from 'react'
const MovieList = ({movies}) => {
    return ( <Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Number</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {movies.map(movie => 
                <tr key = {movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td></td>
                    <td></td>
                </tr>
                )}
            </tbody>
        </table>
        </Fragment> );
}
 
export default MovieList;