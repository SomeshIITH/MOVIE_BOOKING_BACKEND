import { MovieRepository } from "./../repositories/index.js";
import AppError from './../utils/app-error.js';
import ValidationError from "../utils/validation-error.js";
import { StatusCodes } from "http-status-codes";

class MovieService{
    constructor(){
        this.movierepository = new MovieRepository();
    }

    async createMovie(data){
        try{
            const movie = await this.movierepository.create(data);
            return movie;
        }catch(error){
            if(error.name == 'ValidatorError'){
                throw new ValidationError(error);
            }
            // console.log(error);
            throw error;
        }

    }

    async getMovie(id){
        try{
            const movie = await this.movierepository.get(id);
            if(!movie){
                throw new AppError("Not able to get Movie","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return movie;
        }catch(error){
            throw error;
        }
    }

    async getAllMovies(offset=0,limit=0){
        try{
            const movies = await this.movierepository.getAll(offset,limit);
            return movies;
        }catch(error){
            throw error;
        }
    }

    async updateMovie(id,data){
        try{
            const movie = await this.movierepository.update(id,data);
            if(!movie){
                throw new AppError("Not able to Update Movie","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return movie;
        }catch(error){
            throw error;
        }
    }

    async deleteMovie(id){
        try{
            const movie = await this.movierepository.delete(id);
            if(!movie){
                throw new AppError("Not able to delete Movie","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return movie;
        }catch(error){
            throw error;
        }
    }
}

export default MovieService;