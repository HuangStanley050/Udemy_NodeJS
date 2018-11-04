const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();
//const rootDir = require('../util/path.js');


router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
//exports.products = products;
