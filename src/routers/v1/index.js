import express from 'express';
const router = express.Router();

import {createMovie,getMovie,getAllMovies,updateMovie,deleteMovie} from './../../controllers/movie-controller.js';

import { createTheatre,getTheatre,getAllTheatres,updateTheatre,deleteTheatre,updateMoviesInTheatre,getAllMoviesInTheatre,checkMovieInTheatre} from './../../controllers/theatre-controller.js';


router.post('/movie',createMovie);
router.get('/movie/:id',getMovie);
router.get('/movies',getAllMovies);
router.put('/movie/:id',updateMovie);
router.delete('/movie/:id',deleteMovie);


router.post('/theatre',createTheatre);
router.get('/theatre/:id',getTheatre);
router.get('/theatres',getAllTheatres);
router.put('/theatre/:id',updateTheatre);
router.delete('/theatre/:id',deleteTheatre);
router.patch('/theatre/:id',updateMoviesInTheatre); 

router.get('/theatre/:id/movies',getAllMoviesInTheatre);
router.get('/theatre/:theatreId/movie/:movieId',checkMovieInTheatre);


export default router;