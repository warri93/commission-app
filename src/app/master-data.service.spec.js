/* tslint:disable:no-unused-variable */
"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var master_data_service_1 = require("./master-data.service");
describe('Service: MasterData', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [master_data_service_1.MasterDataService]
        });
    });
    it('should ...', testing_1.inject([master_data_service_1.MasterDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
