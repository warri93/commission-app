"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchassignmentComponent = (function () {
    function SearchassignmentComponent(commissionService) {
        this.commissionService = commissionService;
        this.orderNumber = "";
        this.orderLineNumber = "";
        this.relinkOrderLineNumber = "";
        this.results = [];
        this.dataLoaded = 0;
    }
    SearchassignmentComponent.prototype.ngOnInit = function () {
    };
    SearchassignmentComponent.prototype.search = function () {
        var _this = this;
        console.log("searching" + this.orderNumber + " / " + this.orderLineNumber);
        this.dataLoaded = 0;
        this.commissionService.searchAssignment(this.orderNumber, this.orderLineNumber).subscribe(function (assignments) { return _this.results = assignments; }, function (err) {
            _this.errorMessage = err;
            console.log("ERROR : " + _this.errorMessage);
        }, function () {
            console.log("DONE GETTING ASSIGNMENTS");
            _this.dataLoaded = 1;
        });
    };
    SearchassignmentComponent.prototype.relinkOrder = function () {
        var _this = this;
        console.log("relink");
        this.commissionService.relink(this.relinkOrderNumber, this.relinkOrderLineNumber).subscribe(function (response) { return _this.relinkResponse = response; }, function (err) {
            _this.errorMessage = err;
            console.log("ERROR : " + _this.errorMessage);
        }, function () {
            console.log("DONE RELINKING ORDER");
        });
    };
    SearchassignmentComponent.prototype.clear = function () {
        this.results = [];
        this.orderNumber = "";
        this.orderLineNumber = "";
    };
    return SearchassignmentComponent;
}());
SearchassignmentComponent = __decorate([
    core_1.Component({
        selector: 'app-searchassignment',
        templateUrl: 'searchassignment.html',
        styleUrls: ['searchassignment.css']
    })
], SearchassignmentComponent);
exports.SearchassignmentComponent = SearchassignmentComponent;
