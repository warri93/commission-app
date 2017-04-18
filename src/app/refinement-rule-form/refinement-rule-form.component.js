"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var commission_back_end_service_1 = require("../commission-back-end.service");
var create_refinement_dto_1 = require("../models/create-refinement-dto");
var assignment_value_impl_1 = require("../models/assignment-value-impl");
var period_impl_1 = require("../models/period-impl");
var sales_person_impl_1 = require("../models/sales-person-impl");
var creator_person_impl_1 = require("../models/creator-person-impl");
var RefinementRuleFormComponent = (function () {
    function RefinementRuleFormComponent(masterDataService, commissionService, _fb) {
        this.masterDataService = masterDataService;
        this.commissionService = commissionService;
        this._fb = _fb;
    }
    RefinementRuleFormComponent.prototype.ngOnInit = function () {
        this.getAssigmentRules();
        this.createRefinementForm = this._fb.group({
            defaultRules: ['', [forms_1.Validators.required]],
            deliveryAddresses: ['', [forms_1.Validators.required]],
            productID: [''],
            periods: this._fb.array([
                this.initPeriod()
            ])
        });
    };
    RefinementRuleFormComponent.prototype.getAssigmentRules = function () {
        var _this = this;
        this.commissionService.getRules()
            .subscribe(function (rules) { _this.rules = rules; }, function (error) { return _this.errorMessage = error; }),
            function () { return console.log("Done getting data for createrefinements"); };
    };
    RefinementRuleFormComponent.prototype.setDefault = function () {
        this.selectedDefault = this.createRefinementForm.controls['defaultRules'].value;
    };
    RefinementRuleFormComponent.prototype.addSalesPerson = function () {
        var control = this.createRefinementForm.controls['salespersons'];
        control.push(this.initSalesPerson());
    };
    RefinementRuleFormComponent.prototype.addPeriod = function () {
        var control = this.createRefinementForm.controls['periods'];
        control.push(this.initPeriod());
    };
    RefinementRuleFormComponent.prototype.create = function () {
        var _this = this;
        this.response = "";
        this.errorMessage = "";
        var refRuleDto = new create_refinement_dto_1.RefinementRuleDTOImpl();
        refRuleDto.defaultAssignmentRuleID = this.createRefinementForm.controls['defaultRules'].value.defaultAssignmentRuleID;
        var selectedAddres = this.createRefinementForm.controls['deliveryAddresses'].value;
        var productIDToSet = this.createRefinementForm.controls['productID'].value;
        var productSpecs = new commission_back_end_service_1.ProductSpecificationImpl();
        productSpecs.productID = productIDToSet;
        var dest = new commission_back_end_service_1.DestinationAddressImpl();
        if (selectedAddres) {
            dest.reference = selectedAddres.ID;
            dest.addressLine = selectedAddres.addressLine;
            dest.addressLine2 = selectedAddres.addressLine2;
            dest.addressName = selectedAddres.addressName;
            dest.cityName = selectedAddres.cityName;
            dest.country = selectedAddres.country;
            dest.countrySubEntityCode = selectedAddres.countrySubEntityCode;
            dest.postalZone = selectedAddres.postalZone;
            refRuleDto.destinationAddress = dest;
        }
        refRuleDto.productSpecification = productSpecs;
        var periodsToAdd = this.createRefinementForm.controls['periods'].value;
        var assignmentValues = [];
        for (var _i = 0, periodsToAdd_1 = periodsToAdd; _i < periodsToAdd_1.length; _i++) {
            var period = periodsToAdd_1[_i];
            var assignees = [];
            var salesPersonsToAdd = period.salespersons;
            for (var _a = 0, salesPersonsToAdd_1 = salesPersonsToAdd; _a < salesPersonsToAdd_1.length; _a++) {
                var sp = salesPersonsToAdd_1[_a];
                var curSp = new sales_person_impl_1.SalesPersonImpl(sp.salesperson.ID, sp.salesperson.firstName, sp.salesperson.lastName);
                var currentAssignee = new commission_back_end_service_1.AssigneeImpl(sp.selectSalesVolume, sp.selectcommission, curSp);
                assignees.push(currentAssignee);
            }
            var periodToAdd = new period_impl_1.PeriodImpl(period.startDate, period.endDate);
            var assignmentToAdd = new assignment_value_impl_1.AssignmentValueImpl(periodToAdd, assignees);
            assignmentValues.push(assignmentToAdd);
        }
        refRuleDto.assignmentValues = assignmentValues;
        refRuleDto.creatorPerson = new creator_person_impl_1.CreatorPersonImpl("740607", "Bert", "Huygens");
        console.log(JSON.stringify(refRuleDto));
        this.commissionService.createRefinementRule(refRuleDto).subscribe(function (response) { _this.response = response; }, function (err) { return _this.errorMessage = err; }, function () {
            console.log("Done");
            _this.createRefinementForm.reset();
        });
    };
    RefinementRuleFormComponent.prototype.fillDeliveryAddresses = function () {
        var _this = this;
        var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
        this.masterDataService.getDeliveryAddresses(assignmentRule.customer.reference).subscribe(function (addresses) { return _this.addresses = addresses; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Done getting  : " + JSON.stringify(_this.addresses)); });
    };
    RefinementRuleFormComponent.prototype.fillSalesPersons = function () {
        var _this = this;
        var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
        this.masterDataService.getSalesPersons(assignmentRule.ravagoEntity.reference, assignmentRule.customer.reference).subscribe(function (salesPersons) { return _this.salesPersons = salesPersons; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Done getting  : " + JSON.stringify(_this.salesPersons)); });
    };
    RefinementRuleFormComponent.prototype.initPeriod = function () {
        var formGroup = this._fb.group({
            startDate: [''],
            endDate: [''],
            salespersons: this._fb.array([
                this.initSalesPerson()
            ])
        });
        return formGroup;
    };
    RefinementRuleFormComponent.prototype.initSalesPerson = function () {
        return this._fb.group({
            salesperson: [''],
            selectcommission: [''],
            selectSalesVolume: ['']
        });
    };
    return RefinementRuleFormComponent;
}());
RefinementRuleFormComponent = __decorate([
    core_1.Component({
        selector: 'app-refinement-rule-form',
        templateUrl: './refinement-rule-form.component.html',
        styleUrls: ['./refinement-rule-form.component.css']
    })
], RefinementRuleFormComponent);
exports.RefinementRuleFormComponent = RefinementRuleFormComponent;
