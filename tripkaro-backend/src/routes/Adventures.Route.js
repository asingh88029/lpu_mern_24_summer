const express = require("express");

const {AddNewAdventureController, GetAllAdventureByCityName, DeleteAdventureByIdController} = require("./../controller/Adventure.controller")

const AdventureRouter = express.Router();

AdventureRouter.post("/add", AddNewAdventureController);

AdventureRouter.get("/", GetAllAdventureByCityName)

AdventureRouter.delete("/delete", DeleteAdventureByIdController)

module.exports = AdventureRouter;