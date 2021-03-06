const fs = require('fs');
const path = require('path');
//const products = [];
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, imageURL, price, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;

    }
    save() {
        //products.push(this);
        getProductsFromFile(products => {
            console.log(p);
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => console.log(err));
        });

    }
    static fetchAll(cb) { //cb is a callback function to process the async request from the readFile
        getProductsFromFile(cb);

    }
};
