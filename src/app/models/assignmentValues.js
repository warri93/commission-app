"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var period_1 = require("./period");
var AssignmentValues = (function () {
    function AssignmentValues() {
        this.period = new period_1.Period();
        this.assignee = [];
    }
    return AssignmentValues;
}());
exports.AssignmentValues = AssignmentValues;
