import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

export interface SalesPerson {
  firstName: string;
  lastName: string;
  contactPersonType: string;
  ID: string;
}

export interface Country {
  identificationCode: string;
}

export interface DeliveryAddress {
  ID: string;
  addressLine: string;
  addressLine2: string;
  addressName: string;
  cityName: string;
  country: Country;
  countrySubEntityCode: string;
  postalZone: string;
}

import {environment} from "../environments/environment";

@Injectable()
export class MasterDataService {

  private headers = environment.HEADERS;

  private options = new RequestOptions();

  private url: string = environment.OHM_MASTERDATA_URL + "companies/";
  private urlPart2: string = "/ravagoEntities/";
  private urlPart3: string = "/contactPersons?contactPersonType=SalesPerson&relationshipType=CUSTOMER";

  private urlDelivery: string = "http://10.3.11.59:20001/public/masterData/companies/";
  private urlDeliveryPart2: string = "/deliveryAddresses";

  constructor(private http: Http) {
  }

  getSalesPersons(legalEntity: string, customer: string): Observable<SalesPerson[]> {

    this.options.headers = this.headers;

    var customUrl: string = this.url + customer + this.urlPart2 + legalEntity + this.urlPart3;
    return this.http.get(customUrl, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getDeliveryAddresses(companyId: string): Observable<DeliveryAddress[]> {
    this.options.headers = this.headers;
    var customAddressUrl: string = this.urlDelivery + companyId + this.urlDeliveryPart2;
    console.log("DELIVERYURL : " + customAddressUrl);
    return this.http.get(customAddressUrl, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("server error :" + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
