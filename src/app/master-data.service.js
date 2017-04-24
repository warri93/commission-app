"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var environment_1 = require("../environments/environment");
var MasterDataService = (function () {
    function MasterDataService(http) {
        this.http = http;
        this.headers = environment_1.environment.COMMISSION_HEADERS;
        this.options = new http_1.RequestOptions();
        this.url = environment_1.environment.OHM_MASTERDATA_URL + "companies/";
        this.urlPart2 = "/ravagoEntities/";
        this.urlPart3 = "/contactPersons?contactPersonType=SalesPerson&relationshipType=CUSTOMER";
        this.urlDelivery = "http://10.3.11.59:20001/public/masterData/companies/";
        this.urlDeliveryPart2 = "/deliveryAddresses";
    }
    MasterDataService.prototype.getLegalEntities = function () {
        this.options.headers = environment_1.environment.BLUE_HEADERS;
        return this.http.get(environment_1.environment.OHM_MASTERDATA_URL + environment_1.environment.COMPANY_SERVICE + "?type=LegalEntity", this.options).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MasterDataService.prototype.getCustomers = function () {
        return [
            {
                "ID": "200499",
                "callSign": "LOOMANSPLASTICSNV",
                "channel": "UNKNOWN",
                "companyGroup": {
                    "id": 1,
                    "description": "Loomans GROUP"
                },
                "defaultCallOffFlag": false,
                "legalAddress": {
                    "id": 12169,
                    "callsign": "LOOMANS PLASTICS",
                    "city": "LOMMEL",
                    "country": {
                        "id": 10,
                        "iso2": "BE",
                        "iso3": "BEL",
                        "name": "BELGIUM"
                    },
                    "countryCode": 10,
                    "email": "contact@loomans.eu",
                    "fax": "+321489151",
                    "line1": "MERCATORSTRAAT 15",
                    "line2": "LINE2",
                    "line3": "LINE3",
                    "line4": "LINE4",
                    "line5": "LINE5",
                    "name": "LOOMANS PLASTICS NV",
                    "phone": "+321456131",
                    "postCode": "3920",
                    "province": "ANTWERP",
                    "provinceCode": "ANT",
                    "updatedForTms": false
                },
                "legalEntitySpec": {
                    "currencyCode": "EUR",
                    "incoTerm": {
                        "id": 1,
                        "code": "EXW",
                        "description": "EXW",
                        "type": "PICKUP"
                    },
                    "legalEntityId": 124,
                    "legalEntityRelationships": [
                        {
                            "legalEntityRelationshipType": "CUSTOMER",
                            "paymentConditionDescription": "30 days",
                            "paymentConditionId": 20,
                            "paymentMediumDescription": "Wire transfer",
                            "paymentMediumId": 5
                        },
                        {
                            "legalEntityRelationshipType": "SUPPLIER",
                            "paymentConditionDescription": "60 days",
                            "paymentConditionId": 21,
                            "paymentMediumDescription": "Wire transfer",
                            "paymentMediumId": 5
                        }
                    ]
                },
                "localName": "LOCAL NAME",
                "name": "LOOMANS PLASTICS NV",
                "tariffGroup": "EUROPE",
                "vatNo": "BE 0441.237.360",
                "uomSystem": "SI metric units",
                "updatedForTms": false
            }
        ];
    };
    MasterDataService.prototype.getSalesPersons = function (legalEntity, customer) {
        this.options.headers = this.headers;
        var customUrl = this.url + customer + this.urlPart2 + legalEntity + this.urlPart3;
        return this.http.get(customUrl, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MasterDataService.prototype.getDeliveryAddresses = function (companyId) {
        this.options.headers = this.headers;
        var customAddressUrl = this.urlDelivery + companyId + this.urlDeliveryPart2;
        console.log("DELIVERYURL : " + customAddressUrl);
        return this.http.get(customAddressUrl, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MasterDataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status - error.statusText : 'Server error';
        console.error("server error :" + errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return MasterDataService;
}());
MasterDataService = __decorate([
    core_1.Injectable()
], MasterDataService);
exports.MasterDataService = MasterDataService;
