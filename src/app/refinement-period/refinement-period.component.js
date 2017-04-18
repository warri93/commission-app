"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RefinementPeriodComponent = (function () {
    function RefinementPeriodComponent(_fb) {
        this._fb = _fb;
    }
    RefinementPeriodComponent.prototype.ngOnInit = function () {
    };
    RefinementPeriodComponent.prototype.addSalesPerson = function () {
        var control = this.createRefinementPeriodForm.controls['salespersons'];
        control.push(this.initSalesPerson());
    };
    RefinementPeriodComponent.prototype.initSalesPerson = function () {
        console.log("init salespersons");
        return this._fb.group({
            salesperson: [''],
            selectcommission: [''],
            selectSalesVolume: ['']
        });
    };
    return RefinementPeriodComponent;
}());
__decorate([
    core_1.Input('salespersonlist')
], RefinementPeriodComponent.prototype, "salespersonslist", void 0);
__decorate([
    core_1.Input('periodGroup')
], RefinementPeriodComponent.prototype, "createRefinementPeriodForm", void 0);
RefinementPeriodComponent = __decorate([
    core_1.Component({
        selector: 'app-refinement-period',
        templateUrl: './refinement-period.component.html',
        styleUrls: ['./refinement-period.component.css']
    })
], RefinementPeriodComponent);
exports.RefinementPeriodComponent = RefinementPeriodComponent;
