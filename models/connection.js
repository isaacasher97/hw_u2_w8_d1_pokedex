const mongoose = require("mongoose")
const dotenv = require("dotenv")

//import .env variables, leads them into proccess.env
dotenv.config()

// save the DATABASE_URL variable into it's own variables
const DATABASE_URL = process.env.DATABASE_URL

// connect our database
mongoose.connect(DATABASE_URL, {})

// connection messages

mongoose.connection.on("open", () => {console.log("Mongo is Connected")}) 
mongoose.connection.on("close", () => {console.log("Mongo is Disconnected")}) 
mongoose.connection.on("error", () => {console.log(error)}) 

// export already connected ongoose file
module.exports = mongoose