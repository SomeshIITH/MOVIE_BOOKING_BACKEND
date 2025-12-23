import User from './../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async getByEmail(email){
        try{
            const user = await this.model.findOne({email : email});
            return user;
        }catch(error){
            throw error;
        }
    }
}

export default UserRepository;