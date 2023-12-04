const mongoose = require('mongoose');

const sertifikasiSchema = new mongoose.Schema({
    img: String,
    deskripsi: String,
    link: String,
})
const Sertifikasi = mongoose.model("Sertifikasi", sertifikasiSchema)

module.exports = Sertifikasi