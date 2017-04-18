/* tslint:disable:no-unused-variable */
"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var commission_back_end_service_1 = require("./commission-back-end.service");
describe('Service: CommissionBackEnd', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [commission_back_end_service_1.CommissionBackEndService]
        });
    });
    it('should ...', testing_1.inject([commission_back_end_service_1.CommissionBackEndService], function (service) {
        expect(service).toBeTruthy();
    }));
});
