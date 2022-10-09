//jshint esversion:6
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const path = require("path")



app.use(express.json({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

app.use(cors());

const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");
const empRoute = require("./routes/adminActions");

let port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

const urlDB = process.env.MONGODB_URL;
mongoose.connect(urlDB, {useNewUrlParser : true},()=>{
  console.log("Connected to the database");
});

app.use("/api/auth",authRoute);

app.use("/api/tasks",taskRoute);

app.use("/api/employees",empRoute);



app.listen(port, function() {
  console.log("Server started");
});


