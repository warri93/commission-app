"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AssignmentRulesOverviewComponent = (function () {
    function AssignmentRulesOverviewComponent(commissionService) {
        this.commissionService = commissionService;
    }
    AssignmentRulesOverviewComponent.prototype.ngOnInit = function () {
        this.getAssigmentRules();
    };
    AssignmentRulesOverviewComponent.prototype.getAssigmentRules = function () {
        var _this = this;
        this.commissionService.getRules()
            .subscribe(function (rules) { console.log("getting the data"); _this.rules = rules; console.log(_this.rules.toString + "done"); }, function (error) { return _this.errorMessage = error; });
    };
    return AssignmentRulesOverviewComponent;
}());
AssignmentRulesOverviewComponent = __decorate([
    core_1.Component({
        selector: 'assignment-rules-overview',
        templateUrl: './assignment-rules-overview.component.html',
        styleUrls: ['./assignment-rules-overview.component.css']
    })
], AssignmentRulesOverviewComponent);
exports.AssignmentRulesOverviewComponent = AssignmentRulesOverviewComponent;
