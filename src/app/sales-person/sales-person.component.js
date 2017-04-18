"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SalesPersonComponent = (function () {
    function SalesPersonComponent() {
    }
    SalesPersonComponent.prototype.ngOnInit = function () {
    };
    return SalesPersonComponent;
}());
__decorate([
    core_1.Input('group')
], SalesPersonComponent.prototype, "salesPersonForm", void 0);
__decorate([
    core_1.Input('salespersonlist')
], SalesPersonComponent.prototype, "salespersonslist", void 0);
SalesPersonComponent = __decorate([
    core_1.Component({
        selector: 'app-sales-person',
        templateUrl: './sales-person.component.html',
        styleUrls: ['./sales-person.component.css']
    })
], SalesPersonComponent);
exports.SalesPersonComponent = SalesPersonComponent;
