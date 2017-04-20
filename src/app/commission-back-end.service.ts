import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {SearchCriteria} from "./models/search-criteria";
import {RuleDTOimpl} from './models/create-rule-dto';

export interface CreatorPerson {
  reference: string;
  firstName: string;
  familyName: string;
}

export class CreatorPerson implements CreatorPerson {
  reference: string;
  firstName: string;
  familyName: string;

}

export interface RavagoEntity {
  reference: string;
  callSign: string;
}

export interface Customer {
  reference: string;
  callSign: string;
}

export interface Period {
  startDate: string;
  endDate: string;
}

export interface SalesPerson {
  reference: string;
  firstName: string;
  familyName: string;
}

export interface Assignee {
  salesVolumePercentage: string;
  commissionPercentage: string;
  salesPerson: SalesPerson;
}

export class AssigneeImpl implements Assignee {
  salesVolumePercentage: string;
  commissionPercentage: string;
  salesPerson: SalesPerson;

  constructor(salesVolumePercentage: string, commissionPercentage: string, salesPerson: SalesPerson) {
    this.salesVolumePercentage = salesVolumePercentage;
    this.commissionPercentage = commissionPercentage;
    this.salesPerson = salesPerson;
  }
}

export interface AssignmentValue {
  period: Period;
  assignees: Assignee[];
}

export interface AssignmentRule {
  ravagoEntity: RavagoEntity;
  customer: Customer;
  assignmentValues: AssignmentValue[];
  defaultAssignmentRuleID: string;
}

export interface AssignmentAssignee {
  assigneeID: string;
  salesVolumePercentage: string;
  commissionPercentage: string;
  salesPerson: SalesPerson;
}

export class AssignmentAssigneeImpl implements AssignmentAssignee {
  assigneeID: string;
  salesVolumePercentage: string;
  commissionPercentage: string;
  salesPerson: SalesPerson;

}

export interface Assignment {
  assignmentID: string;
  assignmentRuleID: string;
  salesOrderID: string;
  salesOrderLineNr: string;
  assignmentAssignees: AssignmentAssignee[];
}

export class AssignmentImpl implements Assignment {
  assignmentID: string;
  assignmentRuleID: string;
  salesOrderID: string;
  salesOrderLineNr: string;
  assignmentAssignees: AssignmentAssignee[];

}

export interface Country {
  identificationCode: string;
}

export interface DestinationAddress {
  reference: string;
  addressLine: string;
  addressLine2: string;
  addressName: string;
  cityName: string;
  country: Country;
  countrySubEntityCode: string;
  postalZone: string;
}

export class DestinationAddressImpl implements DestinationAddress {
  reference: string;
  addressLine: string;
  addressLine2: string;
  addressName: string;
  cityName: string;
  country: Country;
  countrySubEntityCode: string;
  postalZone: string;

}

export interface ProductType {
  reference: string;
  description: string;
}

export interface ProductFamily {
  reference: string;
  description: string;
}

export interface ProductGroup {
  reference: string;
  description: string;
}

export interface ProductSubgroup {
  reference: string;
  description: string;
}

export interface ProductProducer {
  reference: string;
  description: string;
}

export interface ProductBrand {
  reference: string;
  description: string;
}

export interface ProductSpecification {
  productType: ProductType;
  productFamily: ProductFamily;
  productGroup: ProductGroup;
  productSubgroup: ProductSubgroup;
  productProducer: ProductProducer;
  productBrand: ProductBrand;
  productID: string;
}

export class ProductSpecificationImpl implements ProductSpecification {
  productType: ProductType;
  productFamily: ProductFamily;
  productGroup: ProductGroup;
  productSubgroup: ProductSubgroup;
  productProducer: ProductProducer;
  productBrand: ProductBrand;
  productID: string;

}

export interface RefinementRuleDTO {
  creatorPerson: CreatorPerson;
  defaultAssignmentRuleID: string;
  destinationAddress: DestinationAddress;
  productSpecification: ProductSpecification;
  assignmentValues: AssignmentValue[];
}

export interface EditAssignmentDTO {
  comment: string;
  assignmentAssignees: AssignmentAssignee[];
}

export class EditAssignmentDTOImpl implements EditAssignmentDTO {
  comment: string;
  assignmentAssignees: AssignmentAssignee[];

}
import {environment} from '../environments/environment';

@Injectable()
export class CommissionBackEndService {

  urlPublic: string = environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/rules";
  urlAssignments: string = environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/assignments";
  urlRelink: string = environment.COMMISSION_PUBLIC_MULE_URL + "sales/commission/assignments/relink";

  headers = environment.HEADERS;

  options = new RequestOptions();

  constructor(private http: Http) {
  }

  getRules(): Observable<AssignmentRule[]> {
    this.options.headers = this.headers;
    return this.http.get(this.urlPublic, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createDefaultRule(rule: RuleDTOimpl): Observable<Response> {
    this.options.headers = this.headers;
    let body = JSON.stringify(rule);
    return this.http.post(this.urlPublic, body, this.options)
      .map(res => {
        console.log("CREATE RULE DEFAULT RESPONSE : " + res);
      })
      .catch(this.handleError);
  }

  createRefinementRule(refinementRule: RefinementRuleDTO): Observable<Response> {
    this.options.headers = this.headers;
    let body = JSON.stringify(refinementRule);
    let urlToCreate: string = this.urlPublic + "/" + refinementRule.defaultAssignmentRuleID + "/refinements";
    return this.http.post(urlToCreate, body, this.options)
      .catch(this.handleError);
  }


  searchRules(criteria: SearchCriteria): Observable<AssignmentRule[]> {
    console.log(this.headers);
    this.options.headers = this.headers;
    this.options.search = this.createParams(criteria);
    return this.http.get(this.urlPublic, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  searchAssignment(orderNumber: string, orderlineNumber: string): Observable<Assignment[]> {
    console.log(this.headers)
    this.options.headers = this.headers
    this.options.search = this.createAssignmentParams(orderNumber, orderlineNumber);
    return this.http.get(this.urlAssignments, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  editAssignment(id: string, assignmentDto: EditAssignmentDTO): Observable<Response> {
    this.options.headers = this.headers;
    let body = JSON.stringify(assignmentDto);
    let urlToEdit: string = this.urlAssignments + "/" + id;
    return this.http.put(urlToEdit, body, this.options)
      .catch(this.handleError);
  }

  relink(orderNumber: string, orderlineNumber: string): Observable<Response> {
    this.options.headers = this.headers;
    this.options.search = this.createAssignmentParams(orderNumber, orderlineNumber);
    return this.http.post(this.urlRelink, '', this.options)
      .catch(this.handleError);
  }

  private createAssignmentParams(orderNumber: string, orderlineNumber: string): URLSearchParams {
    let params = new URLSearchParams();
    params.set("salesOrderID", orderNumber);
    if (orderlineNumber != "") {
      params.set("salesOrderLineNr", orderlineNumber);
    }
    console.log("assignmentParams" + params);
    return params;
  }

  private createParams(criteria: SearchCriteria): URLSearchParams {
    let params = new URLSearchParams();

    for (var le of criteria.legalEntity) {
      params.append('ravagoEntityID', le.reference);
    }

    for (var cust of criteria.customer) {
      params.append('customerID', cust.reference);
    }

    for (var sp of criteria.salesperson) {
      params.append('salesPersonID', sp.reference);
    }

    if (criteria.targetDate != "") {
      params.set('targetDate', criteria.targetDate);
    }
    return params;
  }

  getRefinementRules(id: string) {
    this.options.headers = this.headers
    const response = this.http.get(this.urlPublic + "/" + id + "/refinements", this.options)
      .map(res => res.json())
      .catch(this.handleError);
    return response;
  }

  getRule(id: string): Observable<AssignmentRule> {
    this.options.headers = this.headers
    const response = this.http.get(this.urlPublic + "/" + id, this.options)
      .map(res => res.json())
      .catch(this.handleError);
    return response;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("body" + body + " $$$");
    return body;
  }

  private handleError(error: any) {
    let errorParsed = JSON.parse(error._body);
    let errMsg = (errorParsed.message) ? errorParsed.message : errorParsed.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("error " + errorParsed.message); // log to console instead
    return Observable.throw(errorParsed.message);
  }

}
