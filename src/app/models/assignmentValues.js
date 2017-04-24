"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var period_1 = require("./period");
var assignee_1 = require("./assignee");
var AssignmentValues = (function () {
    function AssignmentValues() {
        this.period = new period_1.Period();
        this.assignee = new assignee_1.Assignee()[""];
    }
    return AssignmentValues;
}());
exports.AssignmentValues = AssignmentValues;
