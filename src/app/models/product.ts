import {ProductType} from "./productType";
import {ProductFamily} from "./productFamily";
import {ProductGroup} from "./productGroup";
import {ProductSubgroup} from "./productSubgroup";
import {ProductProducer} from "./productProducer";
import {ProductBrand} from "./productBrand";

export class Product {
  productType: ProductType;
  productFamily: ProductFamily;
  productGroup: ProductGroup;
  productSubgroup: ProductSubgroup;
  productProducer: ProductProducer;
  productBrand: ProductBrand;
  productID: string;

  constructor() {
    this.productType = new ProductType();
    this.productFamily = new ProductFamily();
    this.productGroup = new ProductGroup();
    this.productSubgroup = new ProductSubgroup();
    this.productProducer = new ProductProducer();
    this.productBrand = new ProductBrand();
    this.productID = "";
  }
}
