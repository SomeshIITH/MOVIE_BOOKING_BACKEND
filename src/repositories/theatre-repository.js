import CrudRepository from './crud-repository.js';
import Theatre from './../models/theatre.js';
class TheatreRepository extends CrudRepository{
    constructor(){
        super(Theatre);
    }

    async _execute(func){
        try{
            const result = await func();
            return result;
        }catch(error){
            console.log("error in _execute, Repository")
            throw error;
        }
    }

    fetchAll(data){
        return this._execute(()=>{
            query = {};
            if(data && data.name)query.name = data.name;
            if(data && data.city)query.city = data.city;
            if(data && data.pincode)query.city = data.pincode;
            const offset=0;
            if(data && data.offset)offset = data.offset;
            const limit=0;
            if(data && data.limit)limit = data.limit;
            return Theatre.find(query).skip(offset).limit(limit);
        })
    }
}

export default TheatreRepository;