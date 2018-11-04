const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //console.log("middleware1");
    //res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
    res.render('admin/add-product', {
        path: '/admin/add-product',
        pageTitle: "Add Product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true

    });
};

exports.postAddProduct = (req, res, next) => {
    //console.log(req.body);
    //products.push({ title: req.body.title });
    const product = new Product(req.body.title);

    product.save();

    res.redirect('/');

};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: "Admin Products",
            path: '/admin/products'

        });
    });
};
