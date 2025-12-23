import UserService from './../services/index.js';
const userService = new UserService();

import { StatusCodes } from 'http-status-codes';

const signUp = async (req,res)=>{
    try{
        let name = req.body.name, email = req.body.email, password = req.body.password;
        const user = userService.signUp({
            name : name,
            email : email,
            password : password
        });
        return res.status(StatusCodes.OK).json({
            data : user,
            success : true,
            message : "User created successfully",
            err : {}
        })
    }catch(error){
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error
        })
    }
}

const signIn = async (req,res)=>{
    try{
        let email = req.body.email, password = req.body.password;
        const jwttoken = userService.signIn(email,password);
        return res.status(StatusCodes.OK).json({
            data : jwttoken,
            success : true,
            message : "User signed in successfully",
            err : {}
        })
    }catch(error){
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error
        })
    }
}

export {signIn,signUp};

