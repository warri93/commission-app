"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var AssignmentRuleDetailComponent = (function () {
    function AssignmentRuleDetailComponent(route, router, commissionService) {
        this.route = route;
        this.router = router;
        this.commissionService = commissionService;
        this.refinementRules = [];
        this.dataLoaded = 0;
        this.dataRefinementLoaded = 0;
    }
    AssignmentRuleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            _this.getRule(_this.id);
            _this.getRefinements(_this.id);
        });
    };
    AssignmentRuleDetailComponent.prototype.gotoOverview = function () {
        this.router.navigate(['/']);
    };
    AssignmentRuleDetailComponent.prototype.getRefinements = function (id) {
        var _this = this;
        this.commissionService.getRefinementRules(this.id)
            .subscribe(function (refinementRules) { _this.refinementRules = refinementRules; }, function (err) { return _this.errorMessage = err; }, function () { console.log(_this.refinementRules); _this.dataRefinementLoaded = 1; });
    };
    AssignmentRuleDetailComponent.prototype.getRule = function (id) {
        var _this = this;
        this.commissionService.getRule(id)
            .subscribe(function (assignmentRule) { console.log(assignmentRule); _this.rule = assignmentRule; _this.dataLoaded = 1; }, function (err) { return _this.errorMessage = err; }, function () { console.log("DONE?DONE"); });
    };
    return AssignmentRuleDetailComponent;
}());
AssignmentRuleDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-assignment-rule-detail',
        templateUrl: 'assignment-rule-detail.html',
        styleUrls: ['assignment-rule-detail.css']
    })
], AssignmentRuleDetailComponent);
exports.AssignmentRuleDetailComponent = AssignmentRuleDetailComponent;
