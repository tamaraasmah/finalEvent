const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./config/db");
const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

db.then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
