"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commission_back_end_service_1 = require("../commission-back-end.service");
var RuleDTOimpl = (function () {
    function RuleDTOimpl() {
        this.creatorPerson = new commission_back_end_service_1.CreatorPerson();
        this.creatorPerson.firstName = "Bert";
        this.creatorPerson.familyName = "Huygens";
        this.creatorPerson.reference = "740607255";
    }
    return RuleDTOimpl;
}());
exports.RuleDTOimpl = RuleDTOimpl;
