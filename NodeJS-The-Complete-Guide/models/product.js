const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path')

const p = path.join(
    rootDir,
    'data',
    'products.json');

const getProductsFromFile = callback => {
    fs.readFile(p, (err, data) => {
        if (err) {
            return callback([]);
        } else {
            callback(JSON.parse(data));
        }
    });
}


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        fs.readFile(p, (err, data) => {
        })
    };

    static fetchAll(callback) {
        getProductsFromFile(callback);
    };
};