"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../../node_modules/@angular/forms/src/form_builder.d.ts"/>
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ravago_entity_impl_1 = require("../models/ravago-entity-impl");
var create_rule_dto_1 = require("../models/create-rule-dto");
var assignment_rule_impl_1 = require("../models/assignment-rule-impl");
var customer_impl_1 = require("../models/customer-impl");
var assignment_value_impl_1 = require("../models/assignment-value-impl");
var period_impl_1 = require("../models/period-impl");
var assignee_impl_1 = require("../models/assignee-impl");
var sales_person_impl_1 = require("../models/sales-person-impl");
var AssignmentRuleFormComponent = (function () {
    function AssignmentRuleFormComponent(commissionService, masterDataService, _fb) {
        this.commissionService = commissionService;
        this.masterDataService = masterDataService;
        this._fb = _fb;
        this.entities = [new ravago_entity_impl_1.RavagoEntityImpl("533714", "MUEHLSTEIN"), new ravago_entity_impl_1.RavagoEntityImpl("597612", "MUEHLSTEIN CA"), new ravago_entity_impl_1.RavagoEntityImpl("515785", "CPA")];
        this.customers = [
            new customer_impl_1.CustomerImpl("587505", "CHANNEL PRIME ALLIANCE CANADA"),
            new customer_impl_1.CustomerImpl("515785", "CHANNEL PRIME ALLIANCE "),
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
        this.model = new assignment_rule_impl_1.AssignmentRuleImpl();
    }
    AssignmentRuleFormComponent.prototype.ngOnInit = function () {
        this.createForm = this._fb.group({
            legalEntity: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            customer: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            endDate: [''],
            salespersons: this._fb.array([
                this.initSalesPerson()
            ])
        });
    };
    AssignmentRuleFormComponent.prototype.addSalesPerson = function () {
        var control = this.createForm.controls['salespersons'];
        control.push(this.initSalesPerson());
    };
    AssignmentRuleFormComponent.prototype.save = function (create) {
        var _this = this;
        var ruleDto = new create_rule_dto_1.RuleDTOimpl();
        ruleDto.customer = new customer_impl_1.CustomerImpl(this.createForm.controls['customer'].value.reference, this.createForm.controls['customer'].value.callSign);
        ruleDto.ravagoEntity = new ravago_entity_impl_1.RavagoEntityImpl(this.createForm.controls['legalEntity'].value.reference, this.createForm.controls['legalEntity'].value.callSign);
        var assignmentValues = [];
        var assignees = [];
        var salesreps = this.createForm.controls['salespersons'].value;
        for (var _i = 0, salesreps_1 = salesreps; _i < salesreps_1.length; _i++) {
            var sp = salesreps_1[_i];
            console.log("add" + sp.selectcommission);
            var curSp = new sales_person_impl_1.SalesPersonImpl(sp.salesperson.ID, sp.salesperson.firstName, sp.salesperson.lastName);
            var currentAssignee = new assignee_impl_1.AssigneeImpl(sp.selectSalesVolume, sp.selectcommission, curSp);
            assignees.push(currentAssignee);
        }
        var period = new period_impl_1.PeriodImpl(this.createForm.controls['startDate'].value, this.createForm.controls['endDate'].value);
        var assignmentToAdd = new assignment_value_impl_1.AssignmentValueImpl(period, assignees);
        assignmentValues.push(assignmentToAdd);
        ruleDto.assignmentValues = assignmentValues;
        this.commissionService.createDefaultRule(ruleDto).subscribe(function (response) { console.log("Create rule status : " + response); }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Done"); });
    };
    AssignmentRuleFormComponent.prototype.diagnostic = function () { return JSON.stringify(this.model); };
    AssignmentRuleFormComponent.prototype.fillSalesPersons = function () {
        var _this = this;
        var le = this.createForm.get('legalEntity').value;
        var cu = this.createForm.controls['customer'].value;
        this.masterDataService.getSalesPersons(le.reference, cu.reference).subscribe(function (salesPersons) { return _this.salesPersons = salesPersons; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Done getting  : " + JSON.stringify(_this.salesPersons)); });
    };
    AssignmentRuleFormComponent.prototype.initSalesPerson = function () {
        return this._fb.group({
            salesperson: [''],
            selectcommission: [''],
            selectSalesVolume: ['']
        });
    };
    return AssignmentRuleFormComponent;
}());
AssignmentRuleFormComponent = __decorate([
    core_1.Component({
        selector: 'assignment-rule-form',
        templateUrl: './assignment-rule-form.component.html',
        styleUrls: ['./assignment-rule-form.component.css']
    })
], AssignmentRuleFormComponent);
exports.AssignmentRuleFormComponent = AssignmentRuleFormComponent;
