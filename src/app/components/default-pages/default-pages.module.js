"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var default_pages_routing_1 = require("./default-pages.routing");
var DefaultPagesModule = (function () {
    function DefaultPagesModule() {
    }
    return DefaultPagesModule;
}());
DefaultPagesModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule],
        declarations: [default_pages_routing_1.routedComponents],
        exports: [default_pages_routing_1.exportComponents]
    })
], DefaultPagesModule);
exports.DefaultPagesModule = DefaultPagesModule;
