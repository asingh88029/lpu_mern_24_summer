const express = require("express")
require("dotenv").config()
require("./src/db/connect");

const CitiesRouter = require("./src/routes/Cities.Route");
const AdventureRouter = require("./src/routes/Adventures.Route");

const PORT = process.env.PORT

const server = express()

server.use(express.json())

server.use("/api/v1/cities", CitiesRouter)

server.use("/api/v1/adventures", AdventureRouter)

server.listen(PORT, ()=>{
    console.log("Express.js server is started on PORT : ", PORT)
})
