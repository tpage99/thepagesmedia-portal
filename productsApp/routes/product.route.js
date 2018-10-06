const express = require("express");
const router = express.Router();

//require the controllers 
const product_controller = require('../controllers/product.controller');

//simple test url to check that all files are communicating
router.get('/test', product_controller.test);

module.exports = router;