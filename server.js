const express = require("express");
const errorHandler = require("./middelware/errorHandler");
const { connect, model } = require("mongoose");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

//const port = process.env.PORT <= to run the port saved in dotenv file.
const port = 3000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server runnning in port ${port}`);
});


