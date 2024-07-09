const express = require("express");

const { SaveNewAdventureDetail, GetAdventureDetailsUsingAdventureIdController } = require("./../controller/AdventureDetails.controller")

const AdventureDetailRouter = express.Router()

AdventureDetailRouter.post('/add', SaveNewAdventureDetail)

AdventureDetailRouter.get("/", GetAdventureDetailsUsingAdventureIdController)

module.exports = AdventureDetailRouter;