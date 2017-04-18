"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page_not_found_component_component_1 = require("../app/page-not-found-component/page-not-found-component.component");
var home_page_component_1 = require("../app/home-page/home-page.component");
var assignment_rule_detail_component_1 = require("../app/assignment-rule-detail/assignment-rule-detail.component");
var search_component_1 = require("../app/search/search.component");
var searchassignment_component_1 = require("../app/searchassignment/searchassignment.component");
var assignment_rule_form_component_1 = require("../app/assignment-rule-form/assignment-rule-form.component");
var refinement_rule_form_component_1 = require("../app/refinement-rule-form/refinement-rule-form.component");
var edit_assignment_component_1 = require("./edit-assignment/edit-assignment.component");
var routes = [
    {
        path: '',
        component: home_page_component_1.HomePageComponent,
        data: {
            title: 'Assignment'
        }
    },
    {
        path: 'rule/:id',
        component: assignment_rule_detail_component_1.AssignmentRuleDetailComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'create',
        component: assignment_rule_form_component_1.AssignmentRuleFormComponent
    },
    {
        path: 'createrefinement',
        component: refinement_rule_form_component_1.RefinementRuleFormComponent
    },
    {
        path: 'searchassignments',
        component: searchassignment_component_1.SearchassignmentComponent
    },
    {
        path: 'editassignment',
        component: edit_assignment_component_1.EditAssignmentComponent
    },
    {
        path: '**',
        component: page_not_found_component_component_1.PageNotFoundComponentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
