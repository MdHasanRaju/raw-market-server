const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const colors = require("colors");
require("dotenv").config();

const PORT = 3000;

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes = require("./Resources/Routes/ProductRoutes")
const URI = process.env.MONGO_URI; 

mongoose.connect(URI).then(() => {
  console.log(`Database connection is successful 🛢`.green.bold);
});

app.use("/api/products/", productRoutes);

app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.listen(PORT, () => {
  console.log(
    `Server started at ${new Date().toLocaleString()} on http://localhost:${PORT}/`
  );
});
