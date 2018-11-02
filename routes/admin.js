const path = require('path');
const express = require('express');
const router = express.Router();
//const rootDir = require('../util/path.js');
const products = [];

router.get('/add-product', (req, res, next) => {
    //console.log("middleware1");
    res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    //console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
