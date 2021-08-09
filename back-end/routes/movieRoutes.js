const express = require('express')
const asyncHandler = require('express-async-handler')
const bodyParser = require('body-parser');

const ActionMovie = require('../models/actionMovie')
const NetflixOriginal = require('../models/netflixOriginal')

const movieRoutes = express.Router()
movieRoutes.use(bodyParser.json());

// @desc Fetch All Action Movies
// @route GET /api/action-movies
movieRoutes.get('/api/action-movies', asyncHandler (async (request, response) => {
     const actionMovies = await ActionMovie.find({})
     response.json(actionMovies);  // converting into JSON content type
}) )

movieRoutes.get('/api/action-movies/detail/:id', asyncHandler( async (request, response) => {
    const actionMovie = await ActionMovie.findById(request.params.id)
        if(actionMovie) {
            response.json(actionMovie);  // converting into JSON content type
        }
        else {
            response.status(404).json({message: 'Action Movie is not found!'})
        }
}) )


// @desc Fetch All Netflix Originals
// @route GET /api/netflix-originals

movieRoutes.get('/api/netflix-originals', asyncHandler (async (request, response) => {
    const netflixOriginals = await NetflixOriginal.find({})
    response.json(netflixOriginals);  // converting into JSON content type
}) )

movieRoutes.get('/api/netflix-originals/detail/:id', asyncHandler( async (request, response) => {
   const netflixOriginal = await NetflixOriginal.findById(request.params.id)
       if(netflixOriginal) {
           response.json(netflixOriginal);  // converting into JSON content type
       }
       else {
           response.status(404).json({message: 'Netflix Original is not found!'})
       }
}) )

movieRoutes.post('/api/action-movie', asyncHandler( async (request, response) => {

   const {original_language, original_title, poster_path,  overview,
        release_date, adult, backdrop_path, media_type, type,
        rating, numReviews } = request.body;

   console.log(original_language, original_title, poster_path,  overview,
    release_date, adult, backdrop_path, media_type, type,
    rating, numReviews );
    const actionMovie = new ActionMovie(
        {   
            original_language: original_language,
            original_title: original_title,
            poster_path: poster_path,
            overview: overview,
            release_date: release_date,
            adult: adult,
            backdrop_path: backdrop_path,
            media_type: media_type,
            type: type,
            rating: rating,
            numReviews: numReviews
        }
    );
    
	await actionMovie.save( (error, result) => {
        if (error)     {
            return response.json({
                status: false,
                message: 'Movie insert failed! ',
                error: error
            });
        }
        return response.json({
            status: true,
            message: 'Movied inserted!',
            result: result
        })
    });
	 
 })
)


module.exports =  movieRoutes;