"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var commission_back_end_service_1 = require("../commission-back-end.service");
var EditAssignmentComponent = (function () {
    function EditAssignmentComponent(commissionService) {
        this.commissionService = commissionService;
        this.orderNumber = "";
        this.orderLineNumber = "";
        this.results = [];
        this.dataLoaded = 0;
        this.assignmentToEdit = new commission_back_end_service_1.AssignmentImpl();
    }
    EditAssignmentComponent.prototype.ngOnInit = function () {
    };
    EditAssignmentComponent.prototype.search = function () {
        var _this = this;
        console.log("searching" + this.orderNumber + " / " + this.orderLineNumber);
        this.dataLoaded = 0;
        this.commissionService.searchAssignment(this.orderNumber, this.orderLineNumber).subscribe(function (assignments) { return _this.results = assignments; }, function (err) {
            _this.errorMessage = err;
            console.log("ERROR : " + _this.errorMessage);
        }, function () {
            _this.assignmentToEdit = _this.results[0];
            _this.dataLoaded = 1;
        });
    };
    EditAssignmentComponent.prototype.edit = function () {
        var _this = this;
        this.editResponse = "";
        this.errorMessage = "";
        var dto = new commission_back_end_service_1.EditAssignmentDTOImpl();
        dto.comment = "Edit test";
        dto.assignmentAssignees = this.assignmentToEdit.assignmentAssignees;
        this.commissionService.editAssignment(this.assignmentToEdit.assignmentID, dto).subscribe(function (response) { return _this.editResponse = response; }, function (err) {
            _this.errorMessage = err;
            console.log("ERROR : " + _this.errorMessage);
        }, function () { console.log("Done editing"); });
    };
    return EditAssignmentComponent;
}());
EditAssignmentComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-assignment',
        templateUrl: 'edit-assignment.html',
        styleUrls: ['edit-assignment.css']
    })
], EditAssignmentComponent);
exports.EditAssignmentComponent = EditAssignmentComponent;
