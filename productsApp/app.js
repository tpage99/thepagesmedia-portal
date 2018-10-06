//app.js
const express = require("express");
const bodyParser = require("body-parser");

//initialize express app
const app = express();

//dedicate port number for express app
let port = 1234;

app.listen(port, () => {
    console.log("Server is up and running on port number " + port);
});

