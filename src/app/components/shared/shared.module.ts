import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {ApplicationToolbar} from "./application-toolbar/application-toolbar.component";
import {AuthInterceptor} from "./auth-interceptor/auth-interceptor";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  declarations: [ApplicationToolbar],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ApplicationToolbar
  ],
  providers: [
    AuthInterceptor
  ]
})
export class SharedModule {
}
