"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeriodImpl = (function () {
    function PeriodImpl(startDate, endDate) {
        this.startDate = startDate;
        if (endDate != "") {
            this.endDate = endDate;
        }
    }
    return PeriodImpl;
}());
exports.PeriodImpl = PeriodImpl;
