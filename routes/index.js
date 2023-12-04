const express = require('express');
const route = express.Router()

const desRoute = require("./des.route")
const sertifikasiRoute = require("./sertifikasi.route")
const webinarRoute = require("./webinar.route")
const seminarRoute = require("./seminar.route")

route.get("/", (req, res) => {
  res.json("ini dari express mongoose")
})

route.use("/des", desRoute)
route.use("/sertifikasi", sertifikasiRoute)
route.use("/webinar", webinarRoute)
route.use("/seminar", seminarRoute)

module.exports = route
