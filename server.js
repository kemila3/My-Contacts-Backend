const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

//const port = process.env.PORT <= to run the port saved in dotenv file.
const port = 3000;

app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => {
  console.log(`Server runnning in port ${port}`);
});
