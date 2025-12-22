import { MovieService } from "./../services/index.js";
import { StatusCodes } from "http-status-codes";

const movieService = new MovieService();


const createMovie = async (req,res)=>{
    try{
        const result = await movieService.createMovie(req.body);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "movie created successfully"
        })
    }catch(error){
        // console.log("error in controller");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

const getMovie = async (req,res)=>{
    try{
        const result = await movieService.getMovie(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "movie get successfully"
        })
    }catch(error){
        // console.log("error in controller");
        // console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

const getAllMovies = async (req,res)=>{
    try{
        const result = await movieService.getAllMovies(req.query.offset,req.query.limit);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "movie All get successfully"
        })
    }catch(error){
        // console.log("error in controller");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

const updateMovie = async (req,res)=>{
    try{
        const result = await movieService.updateMovie(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "movie updated successfully"
        })
    }catch(error){
        // console.log("error in controller");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

const deleteMovie = async (req,res)=>{
    try{
        const result = await movieService.deleteMovie(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "movie deleted successfully"
        })
    }catch(error){
        // console.log("error in controller");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

export {deleteMovie,updateMovie,getAllMovies,getMovie,createMovie};