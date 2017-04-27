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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var CreatorPerson = (function () {
    function CreatorPerson() {
    }
    return CreatorPerson;
}());
exports.CreatorPerson = CreatorPerson;
var AssigneeImpl = (function () {
    function AssigneeImpl(salesVolumePercentage, commissionPercentage, salesPerson) {
        this.salesVolumePercentage = salesVolumePercentage;
        this.commissionPercentage = commissionPercentage;
        this.salesPerson = salesPerson;
    }
    return AssigneeImpl;
}());
exports.AssigneeImpl = AssigneeImpl;
var AssignmentAssigneeImpl = (function () {
    function AssignmentAssigneeImpl() {
    }
    return AssignmentAssigneeImpl;
}());
exports.AssignmentAssigneeImpl = AssignmentAssigneeImpl;
var AssignmentImpl = (function () {
    function AssignmentImpl() {
    }
    return AssignmentImpl;
}());
exports.AssignmentImpl = AssignmentImpl;
var DestinationAddressImpl = (function () {
    function DestinationAddressImpl() {
    }
    return DestinationAddressImpl;
}());
exports.DestinationAddressImpl = DestinationAddressImpl;
var ProductSpecificationImpl = (function () {
    function ProductSpecificationImpl() {
    }
    return ProductSpecificationImpl;
}());
exports.ProductSpecificationImpl = ProductSpecificationImpl;
var EditAssignmentDTOImpl = (function () {
    function EditAssignmentDTOImpl() {
    }
    return EditAssignmentDTOImpl;
}());
exports.EditAssignmentDTOImpl = EditAssignmentDTOImpl;
var environment_1 = require("../environments/environment");
var CommissionBackEndService = (function () {
    function CommissionBackEndService(http) {
        this.http = http;
        this.urlPublic = environment_1.environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/rules";
        this.urlAssignments = environment_1.environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/assignments";
        this.urlRelink = environment_1.environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/assignments/relink";
        this.headers = environment_1.environment.COMMISSION_HEADERS;
        this.options = new http_1.RequestOptions();
    }
    CommissionBackEndService.prototype.getRules = function () {
        this.options.headers = this.headers;
        return this.http.get(this.urlPublic, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.createDefaultRule = function (rule) {
        this.options.headers = this.headers;
        var body = JSON.stringify(rule);
        return this.http.post(this.urlPublic, body, this.options)
            .map(function (res) {
            console.log("CREATE RULE DEFAULT RESPONSE : " + res);
        })
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.createRefinementRule = function (refinementRule) {
        this.options.headers = this.headers;
        var body = JSON.stringify(refinementRule);
        var urlToCreate = this.urlPublic + "/" + refinementRule.defaultAssignmentRuleID + "/refinements";
        return this.http.post(urlToCreate, body, this.options)
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.searchRules = function (criteria) {
        console.log(this.headers);
        this.options.headers = this.headers;
        this.options.search = this.createParams(criteria);
        return this.http.get(this.urlPublic, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.searchAssignment = function (orderNumber, orderlineNumber) {
        console.log(this.headers);
        this.options.headers = this.headers;
        this.options.search = this.createAssignmentParams(orderNumber, orderlineNumber);
        return this.http.get(this.urlAssignments, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.editAssignment = function (id, assignmentDto) {
        this.options.headers = this.headers;
        var body = JSON.stringify(assignmentDto);
        var urlToEdit = this.urlAssignments + "/" + id;
        return this.http.put(urlToEdit, body, this.options)
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.relink = function (orderNumber, orderlineNumber) {
        this.options.headers = this.headers;
        this.options.search = this.createAssignmentParams(orderNumber, orderlineNumber);
        return this.http.post(this.urlRelink, '', this.options)
            .catch(this.handleError);
    };
    CommissionBackEndService.prototype.createAssignmentParams = function (orderNumber, orderlineNumber) {
        var params = new http_1.URLSearchParams();
        params.set("salesOrderID", orderNumber);
        if (orderlineNumber != "") {
            params.set("salesOrderLineNr", orderlineNumber);
        }
        console.log("assignmentParams" + params);
        return params;
    };
    CommissionBackEndService.prototype.createParams = function (criteria) {
        var params = new http_1.URLSearchParams();
        for (var _i = 0, _a = criteria.legalEntity; _i < _a.length; _i++) {
            var le = _a[_i];
            params.append('ravagoEntityID', le.reference);
        }
        for (var _b = 0, _c = criteria.customer; _b < _c.length; _b++) {
            var cust = _c[_b];
            params.append('customerID', cust.reference);
        }
        for (var _d = 0, _e = criteria.salesperson; _d < _e.length; _d++) {
            var sp = _e[_d];
            params.append('salesPersonID', sp.reference);
        }
        if (criteria.targetDate != "") {
            params.set('targetDate', criteria.targetDate);
        }
        return params;
    };
    CommissionBackEndService.prototype.getRefinementRules = function (id) {
        this.options.headers = this.headers;
        var response = this.http.get(this.urlPublic + "/" + id + "/refinements", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return response;
    };
    CommissionBackEndService.prototype.getRule = function (id) {
        this.options.headers = this.headers;
        var response = this.http.get(this.urlPublic + "/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return response;
    };
    CommissionBackEndService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("body" + body + " $$$");
        return body;
    };
    CommissionBackEndService.prototype.handleError = function (error) {
        var errorParsed = JSON.parse(error._body);
        var errMsg = (errorParsed.message) ? errorParsed.message : errorParsed.status ? error.status + " - " + error.statusText : 'Server error';
        console.error("error " + errorParsed.message); // log to console instead
        return Observable_1.Observable.throw(errorParsed.message);
    };
    return CommissionBackEndService;
}());
CommissionBackEndService = __decorate([
    core_1.Injectable()
], CommissionBackEndService);
exports.CommissionBackEndService = CommissionBackEndService;
