const express = require("express")

const ReservationRouter = express.Router()

const {Authorization} = require("./../middlewares/authorization.middleware")

const {CreateNewAdventureBooking} = require("./../controller/Reservation.controller")

ReservationRouter.post("/new", Authorization(['user']), CreateNewAdventureBooking)

module.exports = ReservationRouter