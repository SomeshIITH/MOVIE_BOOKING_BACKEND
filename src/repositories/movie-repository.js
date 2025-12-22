import Movie from './../models/movie.js';
import CrudRepository from './crud-repository.js';
class MovieRepository extends CrudRepository{
    constructor(){
        super(Movie);
    }
}

export default MovieRepository;