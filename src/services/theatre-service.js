import { TheatreRepository } from "./../repositories/index.js";
import AppError from './../utils/app-error.js';
import ValidationError from "../utils/validation-error.js";
import { StatusCodes } from "http-status-codes";
import Theatre from "./../models/theatre.js";

class TheatreService{
    constructor(){
        this.theatrerepository = new TheatreRepository();
    }

    async createTheatre(data){
        try{
            const Theatre = await this.theatrerepository.create(data);
            return Theatre;
        }catch(error){
            if(error.name == 'ValidatorError'){
                throw new ValidationError(error);
            }
            throw error;
        }

    }

    async getTheatre(id){
        try{
            const Theatre = await this.theatrerepository.get(id);
            if(!Theatre){
                throw new AppError("Not able to get Theatre","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return Theatre;
        }catch(error){
            throw error;
        }
    }

    async getAllTheatres(data){
        try{
            const offset = 0,limit=0;
            if(!data.offset)offset=data.offset;
            if(!data.limit)limit=data.limit;

            const Theatres = await this.theatrerepository.getAll(offset,limit);
            return Theatres;
        }catch(error){
            throw error;
        }
    }

    async updateTheatre(id,data){
        try{
            const Theatre = await this.theatrerepository.update(id,data);
            if(!Theatre){
                throw new AppError("Not able to Update Theatre","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return Theatre;
        }catch(error){
            if(error.name == 'ValidatorError'){
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    async deleteTheatre(id){
        try{
            const Theatre = await this.theatrerepository.delete(id);
            if(!Theatre){
                throw new AppError("Not able to delete Theatre","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return Theatre;
        }catch(error){
            throw error;
        }
    }

    async fetchAllTheatre(data){
        try{
            const theatre = await this.theatrerepository.fetchAll(data);
            return theatre;
        }catch(error){
            throw error;
        }
    }

    async updateMoviesInTheatre(theatreId,movieIds,insert){
        try{
            let theatre;
            if(insert){
                //insert == true , we want ot insert movies in thaetre
                theatre = await Theatre.findByIdAndUpdate(
                    {_id : theatreId},
                    {$addToSet : {movies : {$each : movieIds}}},
                    {new  : true}
                )
            }
            else{
                //insert == false , we want to remove movies in theatre
                theatre = await Theatre.findByIdAndUpdate(
                    {_id : theatreId},
                    {$pull : {movies : {$in : movieIds}}},
                    {new : true}
                )
            }
            return theatre.populate('movies');
        }catch(error){
            if(error.name == 'CastError'){
                throw new AppError(error.message,error.name,"Please recheck ids u entered",StatusCodes.NOT_FOUND);
            }
            throw error;
        }
    }

    async getAllMoviesInTheatre(theatreId){
        try{
            const theatre = await Theatre.findById(theatreId,{name : 1, movies : 1}).populate('movies');
            return theatre;
        }catch(error){
            if(error.name == 'CastError'){
                throw new AppError(error.message,error.name,"Please recheck ids u entered",StatusCodes.NOT_FOUND);
            }
            throw error;
        }
    }

    async checkMovieInTheatre(theatreId,movieId){
        try{
            const theatre = await Theatre.findById(theatreId);
            if(!theatre){
               throw new AppError("No such theatre found for the given id","Invalid Id","Please recheck id you entered",StatusCodes.NOT_FOUND);
            }
            return theatre.movies.indexOf(movieId)!=-1;
        }catch(error){
            if(error.name == 'CastError'){
                throw new AppError(error.message,error.name,"Please recheck ids u entered",StatusCodes.NOT_FOUND);
            }
            throw error;
        }
    }
}

export default TheatreService;