require("dotenv").config()
const express = require("express")
const middleware = require("./utils/middleware")
const registerConstrollers = require("./utils/registerControllers")

//create an application object
const app = express()

// register middleware
middleware(app)

// register routes/controllers 
registerConstrollers(app)

// listener
app.listen(process.env.PORT, () => {
    console.log("The Server is listening on port: ", process.env.PORT)
})