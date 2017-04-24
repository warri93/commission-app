"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var salesPerson_1 = require("./salesPerson");
var Assignee = (function () {
    function Assignee() {
        this.salesVolumePercentage = "";
        this.commissionPercentage = "";
        this.salesPerson = new salesPerson_1.SalesPerson();
    }
    return Assignee;
}());
exports.Assignee = Assignee;
