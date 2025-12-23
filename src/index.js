import express from 'express';
import bodyParser from 'body-parser';

import {PORT} from './config/server-config.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import apiRoutes from './routers/index.js';
app.use('/api',apiRoutes);

import {connect} from './config/database-config.js';


// import MovieService from './services/movie-service.js';
// const movieservice = new MovieService();

const StartServer = async ()=>{
    app.listen(PORT,async ()=>{
        console.log(`server is running in http://localhost:${PORT}`);

        console.log('connecting to database');
        await connect();
        console.log('connected to database');

        // movieservice.createMovie({
        //     name : "Avatar",
        //     description : "Avatar is a 2009 American epic science fiction film directed by James Cameron and produced by Jerry Bruckheimer",
        //     casts : ["Sam Worthington","Zoe Saldana","Sigourney Weaver"],
        //     trailerUrl : "https://www.youtube.com/watch?v=5PSNjELqW6w",
        //     language : ["English","Spanish"],
        //     releaseDate : new Date("2022-12-16"),
        //     Director : "James Cameron",
        //     posterUrl : "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZlYS00YjVlLWIzZmUtYjA2ZmJkNjQzOTNlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        // })
    })
};

StartServer();



