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
var ravago_entity_impl_1 = require("../../../../models/ravago-entity-impl");
var create_rule_dto_1 = require("../../../../models/create-rule-dto");
var assignment_rule_impl_1 = require("../../../../models/assignment-rule-impl");
var customer_impl_1 = require("../../../../models/customer-impl");
var assignment_value_impl_1 = require("../../../../models/assignment-value-impl");
var period_impl_1 = require("../../../../models/period-impl");
var assignee_impl_1 = require("../../../../models/assignee-impl");
var sales_person_impl_1 = require("../../../../models/sales-person-impl");
var salesPerson_1 = require("../../../../models/salesPerson");
var CreateAssignmentRule = (function () {
    function CreateAssignmentRule(commissionService, masterDataService, fb) {
        var _this = this;
        this.commissionService = commissionService;
        this.masterDataService = masterDataService;
        this.fb = fb;
        this.salesPersons = [];
        this.model = new assignment_rule_impl_1.AssignmentRuleImpl();
        this.searchLegalEntity = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.entities.filter(function (v) {
                    return v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.reference.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.searchCustomer = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.customers.filter(function (v) {
                    return v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.reference.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.formatEntity = function (x) { return x.callSign; };
        this.searchSalesPerson = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.customers.filter(function (v) {
                    return v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.reference.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
    }
    CreateAssignmentRule.prototype.ngOnInit = function () {
        this.newRule = this.fb.group({
            assignmentValues: this.fb.group({
                period: this.fb.group({
                    startDate: new forms_1.FormControl(""),
                    endDate: new forms_1.FormControl("")
                }),
                assignees: this.fb.array([
                    this.createAssignee()
                ])
            })
        });
        this.entities = [
            new ravago_entity_impl_1.RavagoEntityImpl("533714", "MUEHLSTEIN"),
            new ravago_entity_impl_1.RavagoEntityImpl("597612", "MUEHLSTEIN CA"),
            new ravago_entity_impl_1.RavagoEntityImpl("515785", "CPA")
        ];
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
        /*this.masterDataService.getSalesPersons(le.reference,cu.reference).subscribe(
          salesPersons => this.salesPersons = salesPersons,
          err => this.errorMessage = err,
          () => console.log("Done getting  : " + JSON.stringify(this.salesPersons))
        );*/
    };
    CreateAssignmentRule.prototype.createAssignee = function () {
        return this.fb.group({
            salesVolumePercentage: new forms_1.FormControl(""),
            commissionPercentage: new forms_1.FormControl(""),
            salesPerson: new forms_1.FormControl(new salesPerson_1.SalesPerson())
        });
    };
    CreateAssignmentRule.prototype.addSalesPerson = function () {
        var control = this.createForm.controls['salespersons'];
        control.push(this.initSalesPerson());
    };
    CreateAssignmentRule.prototype.saveRule = function () {
        console.log("save refinement");
        console.log(this.newRule);
    };
    CreateAssignmentRule.prototype.confirmRule = function () {
        console.log("Confirm refinement");
        console.log(this.newRule);
    };
    CreateAssignmentRule.prototype.save = function (create) {
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
    CreateAssignmentRule.prototype.diagnostic = function () { return JSON.stringify(this.model); };
    CreateAssignmentRule.prototype.fillSalesPersons = function () {
        /*var le = this.createForm.get('legalEntity').value;
        var cu = this.createForm.controls['customer'].value;
        this.masterDataService.getSalesPersons(le.reference,cu.reference).subscribe(
          salesPersons => this.salesPersons = salesPersons,
          err => this.errorMessage = err,
          () => console.log("Done getting  : " + JSON.stringify(this.salesPersons))
        );*/
    };
    CreateAssignmentRule.prototype.initSalesPerson = function () {
        return this.fb.group({
            salesperson: [''],
            selectcommission: [''],
            selectSalesVolume: ['']
        });
    };
    return CreateAssignmentRule;
}());
CreateAssignmentRule = __decorate([
    core_1.Component({
        selector: 'create-assignment-rule',
        templateUrl: 'create-assignment-rule.html'
    })
], CreateAssignmentRule);
exports.CreateAssignmentRule = CreateAssignmentRule;
