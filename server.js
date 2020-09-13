const express = require('express');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dates = require('./routes/api/dates');
const activities = require('./routes/api/activities');


//Creates app
const app = express();
//Creates object in which properties or parameters host, user, password and database name is passed.

app.use(express.json()); //Specifies that incoming requests are of type json

//Connect to the actual database, and throw and err if it cant connect
mongoose
  .connect("mongodb://127.0.0.1:27017/flexplanner") //Connect to local database
  .then(() => console.log('Database conected')) // When promise is resolved succesfully
  .catch(err => console.log(err)) // Error in resolving promise

app.use('/api/dates', dates);

app.use('/api/activities', activities);

const port = 4000;

app.listen(port, () => console.log(`Backend running on port ${port}`));
