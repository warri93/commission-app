"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var country_1 = require("./country");
var Address = (function () {
    function Address() {
        this.reference = "";
        this.addressLine = "";
        this.addressLine2 = "";
        this.addressName = "";
        this.cityName = "";
        this.country = new country_1.Country();
        this.countrySubEntityCode = "";
        this.postalZone = "";
    }
    return Address;
}());
exports.Address = Address;
