import express from 'express';
const router = express.Router();

import {createMovie,getMovie,getAllMovies,updateMovie,deleteMovie} from './../../controllers/movie-controller.js';


router.post('/movie',createMovie);
router.get('/movie/:id',getMovie);
router.get('/movies',getAllMovies);
router.put('/movie/:id',updateMovie);
router.delete('/movie/:id',deleteMovie);


export default router;