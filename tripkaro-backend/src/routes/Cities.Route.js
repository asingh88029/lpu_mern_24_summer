const express = require("express");
const {CreateNewCity, GetAllCity : GetAllCityController} = require("./../controller/Cities.controller")

const CitiesRouter = express.Router();

CitiesRouter.get("/all", GetAllCityController)

CitiesRouter.post("/add", CreateNewCity);

module.exports = CitiesRouter;