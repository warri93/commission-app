"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var master_data_service_1 = require("../master-data.service");
var commission_back_end_service_1 = require("../commission-back-end.service");
var shared_module_1 = require("./shared/shared.module");
var assignment_module_1 = require("./assignment/assignment.module");
var refinement_module_1 = require("./refinement/refinement.module");
var default_pages_module_1 = require("./default-pages/default-pages.module");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            default_pages_module_1.DefaultPagesModule,
            assignment_module_1.AssignmentModule,
            refinement_module_1.RefinementModule
        ],
        providers: [
            master_data_service_1.MasterDataService,
            commission_back_end_service_1.CommissionBackEndService
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
