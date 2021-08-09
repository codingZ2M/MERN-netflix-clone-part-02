const mongoose =require('mongoose');
const dotenv = require('dotenv')

const users = require('./data/users')
const actionMovies = require('./data/actionMovies')
const netflixOriginals = require('./data/netflixOriginals')
const topRatedMovies = require('./data/topRated')

const User = require('./models/user')
const ActionMovie = require('./models/actionMovie')
const NetflixOriginal = require('./models/netflixOriginal')
const TopRated = require('./models/topRated')
 
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await ActionMovie.deleteMany()    
        await NetflixOriginal.deleteMany()   
        await TopRated.deleteMany 
        await User.deleteMany()    
        
       const createdUsers = await User.insertMany(users)
       const adminUser = createdUsers[0]._id

       const allActionMovies = actionMovies.map(movie => {
           return {...movie, user: adminUser}
       })
       const allNetflixOriginals = netflixOriginals.map(movie => {
            return {...movie, user: adminUser}
        })
        const allTopRated = topRatedMovies.map(movie => {
            return {...movie, user: adminUser}
        })
        
           await ActionMovie.insertMany(allActionMovies)
           await NetflixOriginal.insertMany(allNetflixOriginals)
           await TopRated.insertMany(allTopRated)

        console.log('Data Exported To Mongo DB!' )
        process.exit()
    } catch (error ) {
        console.error(`${error}`)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await ActionMovie.deleteMany()    
        await User.deleteMany()  
        await TopRated.deleteMany()  
  
        console.log('Data Deleted In Mongo DB!' )
        process.exit()
    } catch (error ) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}