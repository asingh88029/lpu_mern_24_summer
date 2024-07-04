const express = require("express");

const CitiesRouter = express.Router();

CitiesRouter.post("/add", (request, response)=>{
    console.log("hello")
    response.status(200).json({
        message : "hello"
    })
})

module.exports = CitiesRouter;