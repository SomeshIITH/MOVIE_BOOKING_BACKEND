import { TheatreService } from "./../services/index.js";
import { StatusCodes } from "http-status-codes";

const theatreService = new TheatreService();


const createTheatre = async (req,res)=>{
    try{
        const result = await theatreService.createTheatre(req.body);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "Theatre created successfully"
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

const getTheatre = async (req,res)=>{
    try{
        const result = await theatreService.getTheatre(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "Theatre get successfully"
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            err : error,
            message : error.message
        })
    }
}

const getAllTheatres = async (req,res)=>{
    try{
        const result = await theatreService.getAllTheatres(req.query.offset,req.query.limit);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "Theatre All get successfully"
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

const updateTheatre = async (req,res)=>{
    try{
        const result = await theatreService.updateTheatre(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "Theatre updated successfully"
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

const deleteTheatre = async (req,res)=>{
    try{
        const result = await theatreService.deleteTheatre(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            err : {},
            message : "Theatre deleted successfully"
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

const updateMoviesInTheatre = async (req,res)=>{
    try{
        const result = await theatreService.updateMoviesInTheatre(req.params.id,req.body.moviesId,req.body.insert);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "movies in theatre updated successfully",
            err : {}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            message : error.message,
            err : error
        })
    }
}

export {deleteTheatre,updateTheatre,getAllTheatres,getTheatre,createTheatre,updateMoviesInTheatre};