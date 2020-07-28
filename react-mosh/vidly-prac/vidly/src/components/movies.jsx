import React,{Component} from 'react';
import { getGenres } from '../services/fakeGenre';
import { getMovies } from '../services/fakeMovies';
import MovieList from './movieList';
import GenreList from './genreList';
import SearchMovie from './search';
import ChangeClolor from './changeColor';
import SearchByCheck from './searchByCheck';

class Movies extends Component {
    state = {
        movies:[],
        genres:[],
        selectedGenre:{_id:"", name:'all genres'},
        searchedMovie:'',
        black:false
    }
    componentDidMount() {
        const genres = [{_id:"", name:'all genres'},...getGenres()]
        this.setState({movies:getMovies(),genres})
    }
    handleGenreSelect = genre => {
     this.setState({selectedGenre:genre,searchedMovie:''})
    }
    handleSearch = query => {
      this.setState({searchedMovie:query,selectedGenre:{}})
    }
    handleChange = () =>{
        this.setState({black:!this.state.black})
        
    }
    handleMultiSelect = nameofGenre => {
        let genres = [...this.state.genres];
        let index = genres.findIndex(g => g.name === nameofGenre);
        genres[index] = {...genres[index]};
        genres[index].selectCheck = !genres[index].selectCheck;
        this.setState({genres,selectedGenre:{},searchedMovie:''})
        console.log(genres[index].selectCheck)
    }
    
render(){
    const {movies,genres,selectedGenre,searchedMovie} = this.state;
    let filtered = [];
    // console.log('sg',selectedGenre)
    // console.log('sm',searchedMovie)
    // if(true){
    //     console.log('empty')
    //     for (let genre of genres){
    //         if(genre.selectCheck ===true){
    //             console.log('filtered',movies.filter(movie => movie.genre.name === genre.name))
    //            let filteredCheck = movies.filter(movie => movie.genre.name === genre.name)
    //            console.log('fff',filteredCheck)
    //            for(let f of filteredCheck) {
    //                filtered.push(f)
    //            }
    //         }
    //     }
    // }

if(searchedMovie !== '') {
    filtered=movies.filter(movie => movie.title.toLowerCase().includes(searchedMovie.toLowerCase()))
}else if (selectedGenre !== {}){
    filtered = selectedGenre._id !== '' ? movies.filter(movie => movie.genre.name === selectedGenre.name): movies
} 
    return(
        <div className= {this.state.black === true? 'container black':'container'}>
        <SearchByCheck genres = {genres} onMultiSelect = {this.handleMultiSelect}/>
        <SearchMovie onSearchChange = {this.handleSearch} searchedMovie = {searchedMovie}/>
        <ChangeClolor onChangeColor={this.handleChange}/>
            <div className="row">
                <div className="col-3"><GenreList genres= {genres} onGenreSelect = {this.handleGenreSelect} selectedGenre = {selectedGenre}/></div>
                <div className="col"><MovieList movies={filtered}/></div>
            </div>
    </div>)
}
}

export default Movies;