const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://EventOwlearn:owl21n25@cluster0.zkypoz3.mongodb.net/beEventOwlearn"

const db = mongoose.connect(DB_URL)

module.exports = db