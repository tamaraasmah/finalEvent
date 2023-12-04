const mongoose = require('mongoose');

const seminarSchema = new mongoose.Schema({
    img: String,
    deskripsi: String,
    link: String,
})
const Seminar = mongoose.model("Seminar", seminarSchema)

module.exports = Seminar