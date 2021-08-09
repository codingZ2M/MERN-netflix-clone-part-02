const mongoose =require('mongoose');

const connectDB = async ()=> {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
        } )

        console.log(`Mongo DB Connected ${dbConnection.connection.host}`)
    } catch(error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)  // Exit with failure
    }

}

module.exports =  connectDB;