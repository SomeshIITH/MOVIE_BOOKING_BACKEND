class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async _execute(func){
        try{
            const result = await func();
            return result;
        }catch(error){
            // console.log("erorr")
            throw error;
        }
    }

    /*
    this.model.create(data) → returns a Promise
    _execute() awaits it
    create() simply returns that Promise
    */
    create(data){
        return this._execute(()=>this.model.create(data));
    }

    get(id){
        return this._execute(()=>this.model.findById(id));
    }

    getAll(offset=0,limit=0){
        return this._execute(()=> this.model.find().skip(offset).limit(limit))
    }

    update(id,data){
        return this._execute(()=>this.model.findByIdAndUpdate(id,data,{new : true}));
    }

    delete(id){
        return this._execute(()=>this.model.findByIdAndDelete(id));
    }
}

export default CrudRepository;