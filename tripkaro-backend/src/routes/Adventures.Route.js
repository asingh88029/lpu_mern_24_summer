const express = require("express");

const {AddNewAdventureController} = require("./../controller/Adventure.controller")

const AdventureRouter = express.Router();

AdventureRouter.post("/add", AddNewAdventureController);

module.exports = AdventureRouter;