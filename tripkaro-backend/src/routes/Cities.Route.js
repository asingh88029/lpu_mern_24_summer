const express = require("express");
const {CreateNewCity} = require("./../controller/Cities.controller")

const CitiesRouter = express.Router();

CitiesRouter.post("/add", CreateNewCity)

module.exports = CitiesRouter;