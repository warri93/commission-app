import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";

import {environment} from '../../../environments/environment'
import {AuthInterceptor} from "../shared/auth-interceptor/auth-interceptor";

@Injectable()
export class AssignmentService {
  constructor(
    private http: AuthInterceptor
  ) {}

  searchAssignment(ravagoEntityID) {
    let url = environment.COMMISSION_BACKEND_URL + "rules?ravagoEntityID=" + ravagoEntityID;
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? error.status - error.statusText : 'Server error';
    console.error("server error :" + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
