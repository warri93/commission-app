"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateRefinementRuleSalesPersons = (function () {
    function CreateRefinementRuleSalesPersons() {
        var _this = this;
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
    CreateRefinementRuleSalesPersons.prototype.ngOnInit = function () {
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
    CreateRefinementRuleSalesPersons.prototype.addSalesPerson = function () {
        /*console.log("add sales person");
        let a: Assignee = new Assignee();
        console.log(a);
        this.newRefinementRule.value.assignmentValues.assignees.push(a);
        console.log(this.newRefinementRule);*/
        var control = this.newRefinementRule.get('assignmentValues').get('assignees');
        console.log(control);
        //control.push(this.createPizza());
    };
    return CreateRefinementRuleSalesPersons;
}());
__decorate([
    core_1.Input()
], CreateRefinementRuleSalesPersons.prototype, "newRefinementRule", void 0);
CreateRefinementRuleSalesPersons = __decorate([
    core_1.Component({
        selector: 'create-refinement-rule-sales-persons',
        templateUrl: 'create-refinement-rule-sales-persons.html'
    })
], CreateRefinementRuleSalesPersons);
exports.CreateRefinementRuleSalesPersons = CreateRefinementRuleSalesPersons;
