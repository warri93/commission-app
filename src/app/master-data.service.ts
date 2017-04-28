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
import {RavagoEntity} from "./models/ravago-entity";

@Injectable()
export class MasterDataService {

  private headers = environment.COMMISSION_HEADERS;

  private options = new RequestOptions();

  private url: string = environment.OHM_MASTERDATA_URL + "companies/";
  private urlPart2: string = "/ravagoEntities/";
  private urlPart3: string = "/contactPersons?contactPersonType=SalesPerson&relationshipType=CUSTOMER";

  private urlDelivery: string = "http://10.3.11.59:20001/public/masterData/companies/";
  private urlDeliveryPart2: string = "/deliveryAddresses";

  constructor(private http: Http) {
  }

  getLegalEntities(): Observable<[{}]> {
    this.options.headers = environment.BLUE_HEADERS;

    return this.http.get(environment.OHM_MASTERDATA_URL + environment.COMPANY_SERVICE + "?type=LegalEntity", this.options).map(res => this.extractLegalEntity(res)).catch(this.handleError);
  }
  private extractLegalEntity(res) {
    let body = res.json();
    for(let i = 0; i < body.length; i++) {
      body[i] = new RavagoEntity(body[i].ID, body[i].callSign);
    }
    return body || {};
  }

  getCustomers(): [{}] {
    return [
      {
        "ID": "200499",
        "callSign":"LOOMANSPLASTICSNV",
        "channel":"UNKNOWN",
        "companyGroup":{
          "id":1,
          "description":"Loomans GROUP"
        },
        "defaultCallOffFlag":false,
        "legalAddress":{
          "id":12169,
          "callsign":"LOOMANS PLASTICS",
          "city":"LOMMEL",
          "country":{
            "id":10,
            "iso2":"BE",
            "iso3":"BEL",
            "name":"BELGIUM"
          },
          "countryCode":10,
          "email":"contact@loomans.eu",
          "fax":"+321489151",
          "line1":"MERCATORSTRAAT 15",
          "line2":"LINE2",
          "line3":"LINE3",
          "line4":"LINE4",
          "line5":"LINE5",
          "name":"LOOMANS PLASTICS NV",
          "phone":"+321456131",
          "postCode":"3920",
          "province":"ANTWERP",
          "provinceCode":"ANT",
          "updatedForTms":false
        },
        "legalEntitySpec":{
          "currencyCode":"EUR",
          "incoTerm":{
            "id":1,
            "code":"EXW",
            "description":"EXW",
            "type":"PICKUP"
          },
          "legalEntityId":124,
          "legalEntityRelationships":[
            {
              "legalEntityRelationshipType":"CUSTOMER",
              "paymentConditionDescription":"30 days",
              "paymentConditionId":20,
              "paymentMediumDescription":"Wire transfer",
              "paymentMediumId":5
            },
            {
              "legalEntityRelationshipType":"SUPPLIER",
              "paymentConditionDescription":"60 days",
              "paymentConditionId":21,
              "paymentMediumDescription":"Wire transfer",
              "paymentMediumId":5
            }
          ]
        },
        "localName":"LOCAL NAME",
        "name":"LOOMANS PLASTICS NV",
        "tariffGroup":"EUROPE",
        "vatNo":"BE 0441.237.360",
        "uomSystem":"SI metric units",
        "updatedForTms":false
      }
    ]
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
    let errMsg = (error.message) ? error.message : error.status ? error.status - error.statusText : 'Server error';
    console.error("server error :" + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
