const express = require("express")
require("dotenv").config()
require("./src/db/connect");

const CitiesRouter = require("./src/routes/Cities.Route");

const PORT = process.env.PORT

const server = express()

server.use("/api/v1/cities", CitiesRouter)

server.listen(PORT, ()=>{
    console.log("Express.js server is started on PORT : ", PORT)
})
