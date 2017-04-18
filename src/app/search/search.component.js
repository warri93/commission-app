"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var search_criteria_1 = require("../models/search-criteria");
var ravago_entity_impl_1 = require("../models/ravago-entity-impl");
var customer_impl_1 = require("../models/customer-impl");
var sales_person_impl_1 = require("../models/sales-person-impl");
var SearchComponent = (function () {
    function SearchComponent(commissionService) {
        this.commissionService = commissionService;
        this.currentLegalEntity = null;
        this.currentCustomer = null;
        this.currentSalesperson = null;
        this.currentTargetDate = "";
        this.entities = [new ravago_entity_impl_1.RavagoEntityImpl("597612", "MUEHLSTEIN CA"), new ravago_entity_impl_1.RavagoEntityImpl("515785", "CPA")];
        this.customers = [
            new customer_impl_1.CustomerImpl("587505", "CHANNEL PRIME ALLIANCE CANADA"),
            new customer_impl_1.CustomerImpl("634632", "QUALITY RESIN SOLUTIONS"),
            new customer_impl_1.CustomerImpl("553932", "ABM NORTH AMERICA CORP"),
            new customer_impl_1.CustomerImpl("630133", "ABSA RESIN TECHNOLOGIES INC"),
            new customer_impl_1.CustomerImpl("630146", "AIR MOLDED PLASTICS"),
            new customer_impl_1.CustomerImpl("630150", "ALLIANCE HANGER INC"),
            new customer_impl_1.CustomerImpl("630254", "CRAWLING VALLEY PLASTICS LIMITED"),
            new customer_impl_1.CustomerImpl("630166", "AMPACET CANADA COMPANY"),
            new customer_impl_1.CustomerImpl("630173", "APOLLO HEALTH AND BEAUTY CARE"),
            new customer_impl_1.CustomerImpl("630178", "ARMAGEDON GLOBAL ENERGY SOLUTIONS CORP"),
            new customer_impl_1.CustomerImpl("630180", "ARMTEC LIMITED PARTNERSHIP")
        ];
        this.salespersons = [
            new sales_person_impl_1.SalesPersonImpl("113070", "JACOB", "PERETZ"),
            new sales_person_impl_1.SalesPersonImpl("113078", "GARY", "GODDARD"),
            new sales_person_impl_1.SalesPersonImpl("41121", "Michael", "Kane"),
            new sales_person_impl_1.SalesPersonImpl("113047", "Robert", "O'Donnell"),
            new sales_person_impl_1.SalesPersonImpl("111095", "George", "Winter"),
            new sales_person_impl_1.SalesPersonImpl("113036", "Dag", "Lian"),
            new sales_person_impl_1.SalesPersonImpl("113037", "John", "Ward"),
            new sales_person_impl_1.SalesPersonImpl("113038", "KELLY", "PELOSI"),
            new sales_person_impl_1.SalesPersonImpl("113042", "DAVID", "HESS"),
            new sales_person_impl_1.SalesPersonImpl("113039", "Tom", "Glasrud"),
            new sales_person_impl_1.SalesPersonImpl("113082", "DANIEL", "PERETZ"),
            new sales_person_impl_1.SalesPersonImpl("113040", "Stuart", "Portman")
        ];
        this.model = new search_criteria_1.SearchCriteria();
        this.results = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.addLegalEntity = function () {
        if (this.currentLegalEntity.reference != "") {
            console.log("adding" + this.currentLegalEntity.reference);
            this.model.legalEntity.push(this.currentLegalEntity);
            console.log(this.model.legalEntity);
            this.currentLegalEntity = null;
        }
    };
    SearchComponent.prototype.addCustomer = function () {
        if (this.currentCustomer.reference != "") {
            this.model.customer.push(this.currentCustomer);
            this.currentCustomer = null;
        }
    };
    SearchComponent.prototype.addSalesPerson = function () {
        if (this.currentSalesperson.reference != "") {
            this.model.salesperson.push(this.currentSalesperson);
            this.currentSalesperson = null;
        }
    };
    SearchComponent.prototype.addTargetDate = function () {
        if (this.currentTargetDate != "") {
            this.model.targetDate = this.currentTargetDate;
            this.currentTargetDate = "";
        }
    };
    SearchComponent.prototype.clearAll = function () {
        this.model = new search_criteria_1.SearchCriteria();
        this.results = [];
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        console.log("searching");
        this.commissionService.searchRules(this.model).subscribe(function (rules) { return _this.results = rules; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("DONE"); });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
exports.SearchComponent = SearchComponent;
