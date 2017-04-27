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
var search_assignment_component_1 = require("./search/search-assignment.component");
var edit_assignment_component_1 = require("./edit/edit-assignment.component");
var create_assignment_rule_component_1 = require("./assignment-rule/create/create-assignment-rule.component");
var assignment_rule_detail_component_1 = require("./assignment-rule/detail/assignment-rule-detail.component");
var search_assignment_rule_component_1 = require("./assignment-rule/search/search-assignment-rule.component");
var assignment_rules_overview_component_1 = require("./assignment-rule/assignment-rules-overview.component");
var create_rule_general_info_component_1 = require("./assignment-rule/create/general-info/create-rule-general-info.component");
var create_rule_sales_persons_component_1 = require("./assignment-rule/create/assigned-sales-persons/create-rule-sales-persons.component");
var routes = [
    {
        path: 'assignment-rules-overview',
        component: assignment_rules_overview_component_1.AssignmentRulesOverview
    },
    {
        path: 'search-assignment',
        component: search_assignment_component_1.SearchAssignment
    },
    {
        path: 'edit-assignment',
        component: edit_assignment_component_1.EditAssignment
    },
    {
        path: 'create-assignment-rule',
        component: create_assignment_rule_component_1.CreateAssignmentRule
    },
    {
        path: 'assignment-rule-detail/:id',
        component: assignment_rule_detail_component_1.AssignmentRuleDetail
    },
    {
        path: 'search-assignment-rule',
        component: search_assignment_rule_component_1.SearchAssignmentRule
    }
];
var AssignmentRoutingModule = (function () {
    function AssignmentRoutingModule() {
    }
    return AssignmentRoutingModule;
}());
AssignmentRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], AssignmentRoutingModule);
exports.AssignmentRoutingModule = AssignmentRoutingModule;
exports.routedComponents = [
    search_assignment_component_1.SearchAssignment,
    edit_assignment_component_1.EditAssignment,
    create_assignment_rule_component_1.CreateAssignmentRule,
    assignment_rule_detail_component_1.AssignmentRuleDetail,
    search_assignment_rule_component_1.SearchAssignmentRule,
    assignment_rules_overview_component_1.AssignmentRulesOverview,
    create_rule_general_info_component_1.CreateRuleGeneralInfo,
    create_rule_sales_persons_component_1.CreateRuleSalesPersons
];
exports.exportComponents = [
    search_assignment_component_1.SearchAssignment,
    edit_assignment_component_1.EditAssignment,
    create_assignment_rule_component_1.CreateAssignmentRule,
    assignment_rule_detail_component_1.AssignmentRuleDetail,
    search_assignment_rule_component_1.SearchAssignmentRule,
    assignment_rules_overview_component_1.AssignmentRulesOverview
];
