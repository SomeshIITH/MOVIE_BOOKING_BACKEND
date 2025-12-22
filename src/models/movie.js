import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    casts : {
        type : [String],
        required : true
    },
    trailerUrl : {
        type : String,
        required : true
    },
    language: {
        type : [String],
        required: true,
        default : ["English"]
    },
    releaseDate: {
        type : Date,
        required : true
    },
    Director : {
        type : String,
        required : true
    },
    posterUrl : {
        type : String
    }
});

const Movie = mongoose.model('Movie',MovieSchema);

export default Movie;