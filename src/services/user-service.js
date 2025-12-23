import {UserRepository} from './../repositories/index.js';
import jwt from 'jsonwebtoken';

import {JWT_SECRETKEY} from './../config/server-config.js';

class UserService{
    constructor(){
        this,userrepository = new UserRepository();
    }

    async signUp(data){
        try{
            if(!(data && data.name && data.email && data.password)){
                throw Error("Invalid data , put name , email and password");
            }
            const user = await this.userrepository.create({
                name : data.name,
                email : data.email,
                password : data.password
            });
            return user;
        }catch(error){
            throw error;
        }
    }

    async signIn(data){
        try{
            if(!(data && data.email && data.password)){
                throw Error("Invalid data, email and password are mandatory to fill");
            }
            const user = await this.userrepository.getByEmail(data.email);
            if(!user.comparePassword(data.password)){
                throw Error("Invalid Password");
            }
            const jwttoken = jwt.verify({id:user._id,email : user.email},JWT_SECRETKEY,{expiresIn : '1d'});
            return jwttoken;
        }catch(error){
            throw error;
        }
    }

}


export default UserService;