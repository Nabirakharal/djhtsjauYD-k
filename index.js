const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();


const app = express();
 
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MongoDb_URI)
  .then(() => console.log("mongodb connected .."))
  .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`server is running at ${PORT}`))