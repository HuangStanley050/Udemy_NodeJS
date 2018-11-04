const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../views', 'shop.html'));
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: "Shop",
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

};
