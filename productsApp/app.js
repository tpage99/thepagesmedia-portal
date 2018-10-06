//app.js
const express = require("express");
const bodyParser = require("body-parser");

//imports routes for the app
const Product = require('./routes/product.route');

//initialize express app
const app = express();

//set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://taylor:password1@ds141661.mlab.com:41661/thepagesmedia-portal'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', Product);

//dedicate port number for express app
let port = 1234;

app.listen(port, () => {
    console.log("Server is up and running on port number " + port);
});