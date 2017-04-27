"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateRuleGeneralInfo = (function () {
    function CreateRuleGeneralInfo(masterDataService) {
        var _this = this;
        this.masterDataService = masterDataService;
        this.legalEntities = [];
        this.customers = [];
        this.searchLegalEntity = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.legalEntities.filter(function (v) {
                    return v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.ID.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        (v.localName ? v.localName.toLowerCase().startsWith(term.toLocaleLowerCase()) : '') ||
                        v.name.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.searchCustomer = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 1 ? []
                : _this.customers.filter(function (v) {
                    return v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        v.ID.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
                        (v.localName ? v.localName.toLowerCase().startsWith(term.toLocaleLowerCase()) : '') ||
                        v.name.toLowerCase().startsWith(term.toLocaleLowerCase());
                }).splice(0, 10); });
        };
        this.formatEntity = function (x) { return x.callSign; };
    }
    CreateRuleGeneralInfo.prototype.ngOnInit = function () {
        this.getLegalEntities();
        this.getCustomers();
    };
    CreateRuleGeneralInfo.prototype.getLegalEntities = function () {
        var _this = this;
        this.masterDataService.getLegalEntities().subscribe(function (data) {
            _this.legalEntities = data;
        });
    };
    CreateRuleGeneralInfo.prototype.getCustomers = function () {
        this.customers = this.masterDataService.getCustomers();
    };
    CreateRuleGeneralInfo.prototype.legalEntitySelected = function (item) {
        console.log(item);
        console.log("legal entity selected");
    };
    return CreateRuleGeneralInfo;
}());
__decorate([
    core_1.Input()
], CreateRuleGeneralInfo.prototype, "newRule", void 0);
CreateRuleGeneralInfo = __decorate([
    core_1.Component({
        selector: 'create-rule-general-info',
        templateUrl: 'create-rule-general-info.html'
    })
], CreateRuleGeneralInfo);
exports.CreateRuleGeneralInfo = CreateRuleGeneralInfo;
