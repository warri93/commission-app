import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthInterceptor {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('X-ravago-userId', environment.X_RAVAGO_USER_ID);
    headers.append('X-ravago-clientId', environment.X_RAVAGO_CLIENT_ID);
    headers.append('X-ravago-authenticationToken', environment.X_RAVAGO_AUTHENTICATION_TOKEN);
    headers.append('X-ravago-messageId', environment.X_RAVAGO_MESSAGE_ID);
  }

  get(url) {
    console.log("get authinterceptor");
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
