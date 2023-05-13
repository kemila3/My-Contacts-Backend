const express = require("express");
const errorHandler = require("./middelware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

//const port = process.env.PORT <= to run the port saved in dotenv file.
const port = 3000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server runnning in port ${port}`);
});
