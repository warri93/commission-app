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
var MasterDataService = (function () {
    function MasterDataService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'X-ravago-version': '1.0',
            'X-ravago-userId': 'RAV02102',
            'X-ravago-clientId': 'Commission',
            'X-ravago-authenticationToken': 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsIng1dCI6IkpyMU0zOC15cDV3aGZrdTBEVEMyS1NJYTFtYyIsImtpZCI6Im9yYWtleSJ9.eyJ1aWQiOiJSQVYwMjEwMiIsIm1haWwiOiJiZXJ0Lmh1eWdlbnNAcmF2YWdvLmNvbS5kY2siLCJzdWIiOiJSQVYwMjEwMiIsInJhdmFnb3NlY3VyaXR5Z3JvdXBzIjoiQ29tbWlzc2lvbiBBY2NvdW50YW50LEJMVUUgQ1NSIiwib3JhY2xlLm9hdXRoLnVzZXJfb3JpZ2luX2lkX3R5cGUiOiJMREFQX1VJRCIsIm9yYWNsZS5vYXV0aC51c2VyX29yaWdpbl9pZCI6IlJBVjAyMTAyIiwiaXNzIjoid3d3Lm9yYWNsZS5leGFtcGxlLmNvbSIsImxhc3RuYW1lIjoiSHV5Z2VucyIsInJhdmFnb29obXVpZCI6ImJlcnRoIiwiZmlyc3RuYW1lIjoiQmVydCIsIm9yYWNsZS5vYXV0aC5zdmNfcF9uIjoiUmF2YWdvU2VydmljZVByb2ZpbGUiLCJpYXQiOjE0OTA2ODE4MzEsIm9yYWNsZS5vYXV0aC5wcm4uaWRfdHlwZSI6IkxEQVBfVUlEIiwib3JhY2xlLm9hdXRoLnRrX2NvbnRleHQiOiJyZXNvdXJjZV9hY2Nlc3NfdGsiLCJleHAiOjE0OTg0ODE4MzEsInBybiI6IlJBVjAyMTAyIiwianRpIjoiMmRjZjg0NDQtOTJiMy00NGM0LTliMDQtMzRlZmYyNGZjYTllIiwib3JhY2xlLm9hdXRoLnNjb3BlIjoiQ29tbWlzc2lvbi5JbmZvIEJsdWUuQXBwIE9obS5BcHAgT2htLkluZm8gQmx1ZS5JbmZvIENvbW1pc3Npb24uQXBwIFJhdmFnb1VzZXJQcm9maWxlLm1lIiwib3JhY2xlLm9hdXRoLmNsaWVudF9vcmlnaW5faWQiOiJjb21taXNzaW9uQnJvd3NlckNsaWVudCIsIm9yYWNsZS5vYXV0aC5pZF9kX2lkIjoiNmQyNTg2MWUtYzliOS00MGFlLWE3ZjEtMmE4NTFlOTM5NmVlIiwidXNlci50ZW5hbnQubmFtZSI6IlJhdmFnbyJ9.rs4J5BRfHwc2l8Jy6WE78E9lHaH3yawxur-lhikMcxrQ7kAwlY2BBn0yglV4gkTm7ozXxzHkSDEwrqf1czaNLWZCwDHP9BLaSIwV5pFWmyt5LJ2ie5jObvZ8l-IolhGvqfO2mpdUE4stVbrPqenJixpPmuwwa5WhJHHb_6v8lRE',
            'X-ravago-messageId': 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
            'X-ravago-apiKey': 'd856b282-cf8b-43be-8bac-4c29a6f4caf4'
        });
        this.options = new http_1.RequestOptions();
        this.url = "http://localhost:1337/10.3.11.59:20001/ohm-pcr1004-SNAPSHOT/servicecatalog/masterData/3_0/companies/";
        this.urlPart2 = "/ravagoEntities/";
        this.urlPart3 = "/contactPersons?contactPersonType=SalesPerson&relationshipType=CUSTOMER";
        this.urlDelivery = "http://10.3.11.59:20001/public/masterData/companies/";
        this.urlDeliveryPart2 = "/deliveryAddresses";
    }
    MasterDataService.prototype.getSalesPersons = function (legalEntity, customer) {
        this.options.headers = this.headers;
        var customUrl = this.url + customer + this.urlPart2 + legalEntity + this.urlPart3;
        console.log("SALESPERSONSURL : " + customUrl);
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
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error("server error :" + errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return MasterDataService;
}());
MasterDataService = __decorate([
    core_1.Injectable()
], MasterDataService);
exports.MasterDataService = MasterDataService;
