"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productType_1 = require("./productType");
var productFamily_1 = require("./productFamily");
var productGroup_1 = require("./productGroup");
var productSubgroup_1 = require("./productSubgroup");
var productProducer_1 = require("./productProducer");
var productBrand_1 = require("./productBrand");
var Product = (function () {
    function Product() {
        this.productType = new productType_1.ProductType();
        this.productFamily = new productFamily_1.ProductFamily();
        this.productGroup = new productGroup_1.ProductGroup();
        this.productSubgroup = new productSubgroup_1.ProductSubgroup();
        this.productProducer = new productProducer_1.ProductProducer();
        this.productBrand = new productBrand_1.ProductBrand();
        this.productID = "";
    }
    return Product;
}());
exports.Product = Product;
