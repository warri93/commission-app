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
var salesPerson_1 = require("../../../../../models/salesPerson");
var CreateRuleSalesPersons = (function () {
    function CreateRuleSalesPersons(fb) {
        var _this = this;
        this.fb = fb;
        this.searchSalesPerson = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.salesPersons.filter(function (v) {
                    return v.firstName.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.familyName.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.formatSalesPerson = function (x) { return x.firstName + " " + x.familyName; };
    }
    CreateRuleSalesPersons.prototype.ngOnInit = function () {
        this.salesPersons = [
            {
                "reference": "113047",
                "firstName": "Robert",
                "familyName": "O'Donnell"
            },
            {
                "reference": "234",
                "firstName": "Melissa",
                "familyName": "Warrens"
            },
            {
                "reference": "SDFSF",
                "firstName": "Bart",
                "familyName": "Jans"
            }
        ];
    };
    CreateRuleSalesPersons.prototype.addSalesPerson = function () {
        var control = this.newRule.get('assignmentValues').get('assignees');
        control.push(this.createAssignee());
    };
    CreateRuleSalesPersons.prototype.deleteSalesPerson = function (index) {
        var assignees = this.newRule.get('assignmentValues').get('assignees');
        assignees.removeAt(index);
        console.log(this.newRule.get('assignmentValues').get('assignees').value);
    };
    CreateRuleSalesPersons.prototype.salesPersonSelected = function (item, index) {
        this.newRule.get('assignmentValues').get('assignees').value[index].salesPerson = item.item;
    };
    CreateRuleSalesPersons.prototype.createAssignee = function () {
        return this.fb.group({
            salesVolumePercentage: new forms_1.FormControl(""),
            commissionPercentage: new forms_1.FormControl(""),
            salesPerson: new forms_1.FormControl(new salesPerson_1.SalesPerson())
        });
    };
    CreateRuleSalesPersons.prototype.recalculateCommissionTotal = function () {
        var commissionPercentage = 0;
        var assignees = this.newRule.get('assignmentValues').get('assignees').value;
        assignees.forEach(function (assignee) {
            commissionPercentage += assignee.commissionPercentage;
        });
        this.commissionTotal = commissionPercentage / 100;
    };
    CreateRuleSalesPersons.prototype.recalculateSalesVolumeTotal = function () {
        var salesVolumePercentage = 0;
        var assignees = this.newRule.get('assignmentValues').get('assignees').value;
        assignees.forEach(function (assignee) {
            salesVolumePercentage += assignee.salesVolumePercentage;
        });
        this.salesVolumeTotal = salesVolumePercentage / 100;
    };
    return CreateRuleSalesPersons;
}());
__decorate([
    core_1.Input()
], CreateRuleSalesPersons.prototype, "newRule", void 0);
CreateRuleSalesPersons = __decorate([
    core_1.Component({
        selector: 'create-rule-sales-persons',
        templateUrl: 'create-rule-sales-persons.html'
    })
], CreateRuleSalesPersons);
exports.CreateRuleSalesPersons = CreateRuleSalesPersons;
