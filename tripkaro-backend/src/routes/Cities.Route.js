const express = require("express");
const {CreateNewCity, GetAllCity : GetAllCityController, DeleteCityByIdController} = require("./../controller/Cities.controller")

const CitiesRouter = express.Router();

CitiesRouter.get("/all", GetAllCityController)

CitiesRouter.post("/add", CreateNewCity);

CitiesRouter.delete("/delete", DeleteCityByIdController)

module.exports = CitiesRouter;