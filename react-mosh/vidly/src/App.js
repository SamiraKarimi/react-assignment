import React, { Component } from 'react';
import ListGroup from './components/listGroup';
import './App.css';
import {getMovies} from './services/fakeMovieService';
import 'font-awesome/css/font-awesome.css';
import Like from './components/common/like';
import Pagination from './components/common/pagination';
import {paginate} from './utils/paginate';
import {getGenres} from './services/fakeGenreService';


class App extends Component {
  state = {
    movies:[],
    pageSize:4, 
    currentPage:1,
    genres:[] 
  }
  componentDidMount(){
    const genres = [{name:'All Genres'}, ...getGenres()]
    this.setState({movies:getMovies(),genres })
  }
  handleLike =(movie) =>{
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].like = !movies[index].like;
    this.setState({movies})
    }
  
    handleDelete = (id) => {
      console.log('hello delete')
      const movies=this.state.movies.filter(movie => movie._id !==id );
      console.log(movies);
      this.setState({movies});
    }
    handlePageChange = (page) => {
      console.log('page clicked',page)
      this.setState({currentPage: page})
    }
    handleGenreSelect = genre =>{  
     this.setState({selectedGenre: genre,currentPage:1})
      const genres = this.state.movies.filter( movie => movie.genre.name == genre.name)
       
      
    }
  render() { 
   const {length}= this.state.movies
   const {pageSize,currentPage,movies:allMovies,selectedGenre} = this.state
    if(length === 0) 
      return <h3>there is no movie</h3> 
      const filtered = selectedGenre && selectedGenre._id 
      ?allMovies.filter(m => m.genre._id === selectedGenre._id)
      :allMovies;
      const movies = paginate(filtered,currentPage,pageSize)
      return (
        <main className = "container">
        <div className= 'row '>
        <div className="col-3">
        <ListGroup 
         items = {this.state.genres}
         onItemSelect = {this.handleGenreSelect}
         selectedItem = {this.state.selectedGenre}
         />
        </div>
        <div className="col">
        <h3>showing {filtered.length} movies in the dataase.</h3>
        <table className="table"> 
      <thead>
        <tr>
          <th scope="col-8">Title</th>
          <th scope="col-1">Genre</th>
          <th scope="col-1">Stock</th>
          <th scope="col-1">Rate</th>
          <th scope="col-1"></th>
          <th></th>
          <th></th> 
        </tr>
      </thead>
     <tbody>
     {movies.map(movie =><tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><Like liked= {movie.like} onMovieClick = {()=>{this.handleLike(movie)}}/></td>
      <td><button className="btn btn-danger btn-sm" onClick ={()=>this.handleDelete(movie._id)}>Delete</button></td>
      </tr>)}
   </tbody>
    </table>
    <Pagination  length = {filtered.length}
                 pageSize = {pageSize} 
                 currentPage = {currentPage}
                 onPageChange={this.handlePageChange} 
                 />
                 </div>
        </div> 
        </main>
      );
  }
}
 
export default App;



