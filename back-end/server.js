const express = require('express')

const movieRoutes = require('./routes/movieRoutes')

const dotenv = require ('dotenv')
const connectDB = require('./config/db')

dotenv.config()
const app = express()

connectDB()

app.use('/', movieRoutes)   // Mounting


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Node JS Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`));


// Handling HTTP GET requests..
app.get('/', (request, response) => {
    response.send("API is running...")
})

