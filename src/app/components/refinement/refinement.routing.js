"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var create_refinement_rule_component_1 = require("./create/create-refinement-rule.component");
var create_refinement_rule_general_info_component_1 = require("./create/general-info/create-refinement-rule-general-info.component");
var create_refinement_rule_details_component_1 = require("./create/details/create-refinement-rule-details.component");
var create_refinement_rule_sales_persons_component_1 = require("./create/assigned-sales-persons/create-refinement-rule-sales-persons.component");
var routes = [
    {
        path: 'create-refinement-rule',
        component: create_refinement_rule_component_1.CreateRefinementRule
    },
];
var RefinementRoutingModule = (function () {
    function RefinementRoutingModule() {
    }
    return RefinementRoutingModule;
}());
RefinementRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], RefinementRoutingModule);
exports.RefinementRoutingModule = RefinementRoutingModule;
exports.routedComponents = [
    create_refinement_rule_component_1.CreateRefinementRule,
    create_refinement_rule_general_info_component_1.CreateRefinementRuleGeneralInfo,
    create_refinement_rule_details_component_1.CreateRefinementRuleDetails,
    create_refinement_rule_sales_persons_component_1.CreateRefinementRuleSalesPersons
];
exports.exportComponents = [
    create_refinement_rule_component_1.CreateRefinementRule
];
