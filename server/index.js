//jshint esversion:6
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const cors = require("cors");



app.use(express.json())
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("common"));

app.use(cors());

const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");
const empRoute = require("./routes/adminActions");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log("Server started on port 8000");
});

const urlDB = process.env.MONGODB_URL;
mongoose.connect(urlDB, {useNewUrlParser : true},()=>{
  console.log("Connected to the database");
});



app.use("/api/auth",authRoute);

app.use("/tasks",taskRoute);

app.use("/employees",empRoute);

app.get("/", function(req,res){
  res.send("welcome to the home Page");
});



