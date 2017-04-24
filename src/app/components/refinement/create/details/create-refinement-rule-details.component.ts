import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../../models/address";
import {Observable} from "rxjs";
import {Product} from "../../../../models/product";

@Component({
  selector: 'create-refinement-rule-details',
  templateUrl: 'create-refinement-rule-details.html',
  styleUrls: [
    'create-refinement-rule-details.css'
  ]
})
export class CreateRefinementRuleDetails implements OnInit {
  @Input()
  newRefinementRule;

  addresses: Address[];
  products: Product[];

  ngOnInit(): void {
    this.addresses = [
      {
        "reference": "606524",
        "addressLine": "C/O GROUPE LAVERGNE",
        "addressLine2": "8800 1ER GROISSANT",
        "addressName": "MUEHLSTEIN CANADA",
        "cityName": "MONTREAL EAST",
        "country": {
          "identificationCode": "CA"
        },
        "countrySubEntityCode": "QC",
        "postalZone": "8800"
      },
      {
        "reference": "2222",
        "addressLine": "2222",
        "addressLine2": "2222",
        "addressName": "2222",
        "cityName": "2222",
        "country": {
          "identificationCode": "AA"
        },
        "countrySubEntityCode": "AA",
        "postalZone": "2222"
      }
    ];

    this.products = [
      {
        "productType": {
          "reference": "4",
          "description": "Plastics"
        },
        "productFamily": {
          "reference": "12010",
          "description": "Engineering Plastics"
        },
        "productGroup": {
          "reference": "12010",
          "description": "ABS"
        },
        "productSubgroup": {
          "reference": "12020",
          "description": "ABS"
        },
        "productProducer": {
          "reference": "2316",
          "description": "TRINSEO"
        },
        "productBrand": {
          "reference": "12184",
          "description": "Magnum"
        },
        "productID": "765"
      },
      {
        "productType": {
          "reference": "777",
          "description": "777"
        },
        "productFamily": {
          "reference": "777",
          "description": "777"
        },
        "productGroup": {
          "reference": "777",
          "description": "777"
        },
        "productSubgroup": {
          "reference": "777",
          "description": "777"
        },
        "productProducer": {
          "reference": "777",
          "description": "777"
        },
        "productBrand": {
          "reference": "777",
          "description": "777"
        },
        "productID": "777"
      }
    ]
  }

  searchDestinationAddress = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.addresses.filter(v =>
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.addressLine.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.addressLine.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.addressName.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatAddress = (x: {reference: string}) => x.reference;

  searchProduct = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.products.filter(v =>
          v.productID.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatProduct = (x: {productID: string}) => x.productID;
}
