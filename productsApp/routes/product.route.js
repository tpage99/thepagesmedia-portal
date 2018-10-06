const express = require("express");
const router = express.Router();

//require the controllers 
const product_controller = require('../controllers/product.controller');

//simple test url to check that all files are communicating
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;