"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var assignment_rule_form_component_1 = require("./assignment-rule-form/assignment-rule-form.component");
var assignment_rules_overview_component_1 = require("./assignment-rules-overview/assignment-rules-overview.component");
var commission_back_end_service_1 = require("./commission-back-end.service");
var page_not_found_component_component_1 = require("./page-not-found-component/page-not-found-component.component");
var home_page_component_1 = require("./home-page/home-page.component");
var assignment_rule_detail_component_1 = require("./assignment-rule-detail/assignment-rule-detail.component");
var search_component_1 = require("./components/search/search.component");
var searchassignment_component_1 = require("./searchassignment/searchassignment.component");
var master_data_service_1 = require("./master-data.service");
var sales_person_component_1 = require("./sales-person/sales-person.component");
var refinement_rule_form_component_1 = require("./refinement-rule-form/refinement-rule-form.component");
var refinement_period_component_1 = require("./refinement-period/refinement-period.component");
var edit_assignment_component_1 = require("./edit-assignment/edit-assignment.component");
var app_routing_1 = require("./app.routing");
var application_toolbar_component_1 = require("./common/applicaction-toolbar/application-toolbar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            application_toolbar_component_1.ApplicationToolbar,
            assignment_rule_form_component_1.AssignmentRuleFormComponent,
            assignment_rules_overview_component_1.AssignmentRulesOverviewComponent,
            page_not_found_component_component_1.PageNotFoundComponentComponent,
            home_page_component_1.HomePageComponent,
            assignment_rule_detail_component_1.AssignmentRuleDetailComponent,
            search_component_1.SearchComponent,
            searchassignment_component_1.SearchassignmentComponent,
            sales_person_component_1.SalesPersonComponent,
            refinement_rule_form_component_1.RefinementRuleFormComponent,
            refinement_period_component_1.RefinementPeriodComponent,
            edit_assignment_component_1.EditAssignmentComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        providers: [master_data_service_1.MasterDataService, commission_back_end_service_1.CommissionBackEndService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
