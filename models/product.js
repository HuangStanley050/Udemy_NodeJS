const fs = require('fs');
const path = require('path');
//const products = [];
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;

    }
    save() {
        //products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                if (err) {
                    console.log(err);
                }


            });
        });

    }
    static fetchAll(cb) { //cb is a callback function to process the async request from the readFile
        getProductsFromFile(cb);

    }
};
