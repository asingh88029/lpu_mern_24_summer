const express = require("express")
const {RegisterUserController} = require("./../controller/Auth.controller")

const AuthRouter = express.Router()

AuthRouter.post('/signup', RegisterUserController)

module.exports = AuthRouter