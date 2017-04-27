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
var commission_back_end_service_1 = require("../../../commission-back-end.service");
var create_refinement_dto_1 = require("../../../models/create-refinement-dto");
var assignment_value_impl_1 = require("../../../models/assignment-value-impl");
var period_impl_1 = require("../../../models/period-impl");
var creator_person_impl_1 = require("../../../models/creator-person-impl");
var address_1 = require("../../../models/address");
var product_1 = require("../../../models/product");
var salesPerson_1 = require("../../../models/salesPerson");
var CreateRefinementRule = (function () {
    function CreateRefinementRule(masterDataService, commissionService, fb) {
        this.masterDataService = masterDataService;
        this.commissionService = commissionService;
        this.fb = fb;
        /*this.newRefinementRuleForm = fb.group({
         name: fb.group({
         first: ['Nancy', Validators.minLength(2)],
         last: 'Drew',
         }),
         email: '',
         });*/
    }
    CreateRefinementRule.prototype.ngOnInit = function () {
        this.newRefinementRule = this.fb.group({
            destinationAddress: new forms_1.FormControl(new address_1.Address()),
            assignmentValues: this.fb.group({
                period: this.fb.group({
                    startDate: new forms_1.FormControl(""),
                    endDate: new forms_1.FormControl("")
                }),
                assignees: this.fb.array([
                    this.createAssignee()
                ])
            }),
            productSpecification: new forms_1.FormControl(new product_1.Product())
        });
    };
    CreateRefinementRule.prototype.createAssignee = function () {
        return this.fb.group({
            salesVolumePercentage: new forms_1.FormControl(""),
            commissionPercentage: new forms_1.FormControl(""),
            salesPerson: new forms_1.FormControl(new salesPerson_1.SalesPerson())
        });
    };
    CreateRefinementRule.prototype.saveRefinementRule = function () {
        console.log("save refinement");
        console.log(this.newRefinementRule);
    };
    CreateRefinementRule.prototype.confirmRefinementRule = function () {
        console.log("Confirm refinement");
        console.log(this.newRefinementRule);
    };
    CreateRefinementRule.prototype.getAssigmentRules = function () {
        var _this = this;
        this.commissionService.getRules()
            .subscribe(function (rules) {
            _this.rules = rules;
        }, function (error) { return _this.errorMessage = error; }),
            function () { return console.log("Done getting data for createrefinements"); };
    };
    CreateRefinementRule.prototype.setDefault = function () {
        this.selectedDefault = this.createRefinementForm.controls['defaultRules'].value;
    };
    CreateRefinementRule.prototype.addSalesPerson = function () {
        var control = this.createRefinementForm.controls['salespersons'];
        //control.push(this.initSalesPerson());
    };
    CreateRefinementRule.prototype.addPeriod = function () {
        var control = this.createRefinementForm.controls['periods'];
        //control.push(this.initPeriod());
    };
    CreateRefinementRule.prototype.create = function () {
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
                //var curSp = new SalesPersonImpl(sp.salesperson.ID, sp.salesperson.firstName, sp.salesperson.lastName);
                //var currentAssignee = new AssigneeImpl(sp.selectSalesVolume, sp.selectcommission, curSp);
                //assignees.push(currentAssignee);
            }
            var periodToAdd = new period_impl_1.PeriodImpl(period.startDate, period.endDate);
            var assignmentToAdd = new assignment_value_impl_1.AssignmentValueImpl(periodToAdd, assignees);
            assignmentValues.push(assignmentToAdd);
        }
        refRuleDto.assignmentValues = assignmentValues;
        refRuleDto.creatorPerson = new creator_person_impl_1.CreatorPersonImpl("740607", "Bert", "Huygens");
        console.log(JSON.stringify(refRuleDto));
        this.commissionService.createRefinementRule(refRuleDto).subscribe(function (response) {
            _this.response = response;
        }, function (err) { return _this.errorMessage = err; }, function () {
            console.log("Done");
            _this.createRefinementForm.reset();
        });
    };
    CreateRefinementRule.prototype.fillDeliveryAddresses = function () {
        var _this = this;
        var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
        this.masterDataService.getDeliveryAddresses(assignmentRule.customer.reference).subscribe(function (addresses) { return _this.addresses = addresses; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Done getting  : " + JSON.stringify(_this.addresses)); });
    };
    CreateRefinementRule.prototype.fillSalesPersons = function () {
        var _this = this;
        var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
        this.masterDataService.getSalesPersons(assignmentRule.ravagoEntity.reference, assignmentRule.customer.reference).subscribe(
        //salesPersons => this.salesPersons = salesPersons,
        //err => this.errorMessage = err,
        function () { return console.log("Done getting  : " + JSON.stringify(_this.salesPersons)); });
    };
    CreateRefinementRule.prototype.initPeriod = function () {
        /*var formGroup = this._fb.group({
         startDate : [''],
         endDate : [''],
         salespersons :this._fb.array([
         this.initSalesPerson()
         ])
         });
         return formGroup;*/
    };
    CreateRefinementRule.prototype.initSalesPerson = function () {
        /*return this._fb.group({
         salesperson: [''],
         selectcommission : [''],
         selectSalesVolume : ['']
         });*/
    };
    return CreateRefinementRule;
}());
CreateRefinementRule = __decorate([
    core_1.Component({
        selector: 'create-refinement-rule',
        templateUrl: 'create-refinement-rule.html'
    })
], CreateRefinementRule);
exports.CreateRefinementRule = CreateRefinementRule;
