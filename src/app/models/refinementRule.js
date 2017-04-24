"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var creator_person_1 = require("./creator-person");
var product_1 = require("./product");
var assignmentValues_1 = require("./assignmentValues");
var address_1 = require("./address");
var RefinementRule = (function () {
    function RefinementRule() {
        this.creatorPerson = new creator_person_1.CreatorPerson();
        this.defaultAssignmentRuleID = "";
        this.destinationAddress = new address_1.Address();
        this.productSpecification = new product_1.Product();
        this.assignmentValues = new assignmentValues_1.AssignmentValues[""];
    }
    return RefinementRule;
}());
exports.RefinementRule = RefinementRule;
