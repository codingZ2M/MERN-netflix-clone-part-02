const mongoose =require('mongoose');

const netflixOriginalSchema = mongoose.Schema (
 {
    user: {                   // Only an admin can creat movies...
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'         // Relationship between User & Movie Schema
    },
    original_language: {
        type: String,
        required: true
    },
    original_title: {
        type: String,
        required: true,
        unique: true
    },
    poster_path: {
        type: String,
        required: true,
        unique: true
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    adult: {
        type: Boolean,
        required: true,
        default: false
    },
    backdrop_path: {
        type: String,
        required: true,
        unique: true
    },
    media_type: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true
    }
)

const NetflixOriginal = mongoose.model('NetflixOriginal', netflixOriginalSchema)

module.exports =  NetflixOriginal;