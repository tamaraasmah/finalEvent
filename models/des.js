const mongoose = require('mongoose');

const desSchema = new mongoose.Schema({
    img: String,
    deskripsi: String,
    link: String,
})
const Des = mongoose.model("Des", desSchema)

module.exports = Des