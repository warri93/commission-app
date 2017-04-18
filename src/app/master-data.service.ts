import { Injectable } from '@angular/core';
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

@Injectable()
export class MasterDataService {

  private headers = new Headers({     'Content-Type': 'application/json',
    'X-ravago-version':'1.0',
    'X-ravago-userId':'RAV02102',
    'X-ravago-clientId':'Commission',
    'X-ravago-authenticationToken':'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsIng1dCI6IkpyMU0zOC15cDV3aGZrdTBEVEMyS1NJYTFtYyIsImtpZCI6Im9yYWtleSJ9.eyJ1aWQiOiJSQVYwMjEwMiIsIm1haWwiOiJiZXJ0Lmh1eWdlbnNAcmF2YWdvLmNvbS5kY2siLCJzdWIiOiJSQVYwMjEwMiIsInJhdmFnb3NlY3VyaXR5Z3JvdXBzIjoiQ29tbWlzc2lvbiBBY2NvdW50YW50LEJMVUUgQ1NSIiwib3JhY2xlLm9hdXRoLnVzZXJfb3JpZ2luX2lkX3R5cGUiOiJMREFQX1VJRCIsIm9yYWNsZS5vYXV0aC51c2VyX29yaWdpbl9pZCI6IlJBVjAyMTAyIiwiaXNzIjoid3d3Lm9yYWNsZS5leGFtcGxlLmNvbSIsImxhc3RuYW1lIjoiSHV5Z2VucyIsInJhdmFnb29obXVpZCI6ImJlcnRoIiwiZmlyc3RuYW1lIjoiQmVydCIsIm9yYWNsZS5vYXV0aC5zdmNfcF9uIjoiUmF2YWdvU2VydmljZVByb2ZpbGUiLCJpYXQiOjE0OTA2ODE4MzEsIm9yYWNsZS5vYXV0aC5wcm4uaWRfdHlwZSI6IkxEQVBfVUlEIiwib3JhY2xlLm9hdXRoLnRrX2NvbnRleHQiOiJyZXNvdXJjZV9hY2Nlc3NfdGsiLCJleHAiOjE0OTg0ODE4MzEsInBybiI6IlJBVjAyMTAyIiwianRpIjoiMmRjZjg0NDQtOTJiMy00NGM0LTliMDQtMzRlZmYyNGZjYTllIiwib3JhY2xlLm9hdXRoLnNjb3BlIjoiQ29tbWlzc2lvbi5JbmZvIEJsdWUuQXBwIE9obS5BcHAgT2htLkluZm8gQmx1ZS5JbmZvIENvbW1pc3Npb24uQXBwIFJhdmFnb1VzZXJQcm9maWxlLm1lIiwib3JhY2xlLm9hdXRoLmNsaWVudF9vcmlnaW5faWQiOiJjb21taXNzaW9uQnJvd3NlckNsaWVudCIsIm9yYWNsZS5vYXV0aC5pZF9kX2lkIjoiNmQyNTg2MWUtYzliOS00MGFlLWE3ZjEtMmE4NTFlOTM5NmVlIiwidXNlci50ZW5hbnQubmFtZSI6IlJhdmFnbyJ9.rs4J5BRfHwc2l8Jy6WE78E9lHaH3yawxur-lhikMcxrQ7kAwlY2BBn0yglV4gkTm7ozXxzHkSDEwrqf1czaNLWZCwDHP9BLaSIwV5pFWmyt5LJ2ie5jObvZ8l-IolhGvqfO2mpdUE4stVbrPqenJixpPmuwwa5WhJHHb_6v8lRE',
    'X-ravago-messageId':'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
    'X-ravago-apiKey':'d856b282-cf8b-43be-8bac-4c29a6f4caf4'
  });

  private options = new RequestOptions();

  private url:string = "http://localhost:1337/10.3.11.2:8083/ohm-pcr1004-SNAPSHOT/servicecatalog/masterData/3_0/companies/";
  private urlPart2:string = "/ravagoEntities/";
  private urlPart3:string = "/contactPersons?contactPersonType=SalesPerson&relationshipType=CUSTOMER";

  private urlDelivery:string = "http://10.3.11.2:20003/public/masterData/companies/";
  private urlDeliveryPart2:string =  "/deliveryAddresses";

  constructor(private http:Http) { }

  getSalesPersons(legalEntity : string , customer : string):Observable<SalesPerson[]>{

    this.options.headers = this.headers;

    var customUrl:string = this.url + customer + this.urlPart2 + legalEntity + this.urlPart3;
    console.log("SALESPERSONSURL : " + customUrl );
    return this.http.get(customUrl,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getDeliveryAddresses(companyId :string) : Observable<DeliveryAddress[]>{
    this.options.headers = this.headers;
    var customAddressUrl : string = this.urlDelivery + companyId + this.urlDeliveryPart2;
    console.log("DELIVERYURL : " + customAddressUrl );
    return this.http.get(customAddressUrl,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("server error :" + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
