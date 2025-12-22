import mongoose from 'mongoose';

const TheatreSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        minLength : 1
    },
    description : {
        type : String
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : Number
    },
    address : {
        type : String
    },
    movies : {
        type : [String],
        ref : 'Movie'
    }
},{timestamps:true})

const Theatre = mongoose.model('Theatre',TheatreSchema);

export default Theatre;