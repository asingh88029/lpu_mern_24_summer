const express = require("express");

const {AddNewAdventureController, GetAllAdventureByCityName} = require("./../controller/Adventure.controller")

const AdventureRouter = express.Router();

AdventureRouter.post("/add", AddNewAdventureController);

AdventureRouter.get("/", GetAllAdventureByCityName)

module.exports = AdventureRouter;