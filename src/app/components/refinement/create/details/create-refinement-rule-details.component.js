"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateRefinementRuleDetails = (function () {
    function CreateRefinementRuleDetails() {
        var _this = this;
        this.searchDestinationAddress = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.addresses.filter(function (v) {
                    return v.reference.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.addressLine.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.addressLine.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.addressName.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.formatAddress = function (x) { return x.reference; };
        this.searchProduct = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.products.filter(function (v) {
                    return v.productID.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.formatProduct = function (x) { return x.productID; };
    }
    CreateRefinementRuleDetails.prototype.ngOnInit = function () {
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
        ];
    };
    return CreateRefinementRuleDetails;
}());
__decorate([
    core_1.Input()
], CreateRefinementRuleDetails.prototype, "newRefinementRule", void 0);
CreateRefinementRuleDetails = __decorate([
    core_1.Component({
        selector: 'create-refinement-rule-details',
        templateUrl: 'create-refinement-rule-details.html',
        styleUrls: [
            'create-refinement-rule-details.css'
        ]
    })
], CreateRefinementRuleDetails);
exports.CreateRefinementRuleDetails = CreateRefinementRuleDetails;
