const express = require("express");

const { SaveNewAdventureDetail } = require("./../controller/AdventureDetails.controller")

const AdventureDetailRouter = express.Router()

AdventureDetailRouter.post('/add', SaveNewAdventureDetail)

module.exports = AdventureDetailRouter;