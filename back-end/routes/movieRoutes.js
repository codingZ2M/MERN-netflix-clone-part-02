const express = require('express')
const asyncHandler = require('express-async-handler')

const ActionMovie = require('../models/actionMovie')
const NetflixOriginal = require('../models/netflixOriginal');
const TopRated = require('../models/topRated');
const User = require('./../models/user')

const movieRoutes = express.Router()
movieRoutes.use(express.json());


// @desc Fetch All Action Movies
// @route GET /api/action-movies
movieRoutes.get('/api/action-movies', asyncHandler (async (request, response) => {
     const actionMovies = await ActionMovie.find()
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
    const netflixOriginals = await NetflixOriginal.find()
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


movieRoutes.get('/api/top-rated', asyncHandler (async (request, response) => {
    const topRatedMovies = await TopRated.find()
    response.json(topRatedMovies);  // converting into JSON content type
}) )

movieRoutes.get('/api/top-rated/detail/:id', asyncHandler( async (request, response) => {
   const topRatedMovie = await TopRated.findById(request.params.id)
       if(topRatedMovie) {
           response.json(topRatedMovie);  // converting into JSON content type
       }
       else {
           response.status(404).json({message: 'Action Movie is not found!'})
       }
}) )



movieRoutes.post('/api/action-movie', asyncHandler( async (request, response) => {

   const {original_language, original_title, poster_path,  overview,
        release_date, adult, backdrop_path, media_type, type,
        rating, numReviews } = request.body;

        const users = await User.find()
        const adminUser = users[0]._id

    const actionMovie =     {   
        user: adminUser,
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
    await ActionMovie.create(actionMovie, (error, actionMovie) => {
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
            result: actionMovie
        })
    });
	 
   })   

 )


module.exports =  movieRoutes;