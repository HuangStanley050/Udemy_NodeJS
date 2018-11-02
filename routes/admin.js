const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
//const rootDir = require('../util/path.js');


router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
//exports.products = products;
