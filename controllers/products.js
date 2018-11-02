const products = [];

exports.getAddProduct = (req, res, next) => {
    //console.log("middleware1");
    //res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
    res.render('add-product', {
        path: '/admin/add-product',
        pageTitle: "Add Product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true

    });
};

exports.postAddProduct = (req, res) => {
    //console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../views', 'shop.html'));

    res.render('shop', {
        prods: products,
        pageTitle: "Shop",
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};
