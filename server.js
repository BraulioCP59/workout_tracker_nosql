const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// set port var for local or hosted env
const PORT = process.env.PORT || 3000;

//create an express app
const app = express();

//apply the express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//set up a mongoose connection for local db and or env db URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout');

// routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
