import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {NgxErrorsModule} from '@ultimate/ngxerrors';

import {ApplicationToolbar} from "./application-toolbar/application-toolbar.component";
import {AuthInterceptor} from "./auth-interceptor/auth-interceptor";
import {RavagoEntityDropdown} from "./dropdowns/ravago-entity/ravago-entity.component";
import {CustomerDropdown} from "./dropdowns/customer/customer.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxErrorsModule
  ],
  declarations: [
    ApplicationToolbar,
    RavagoEntityDropdown,
    CustomerDropdown
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    NgxErrorsModule,
    ApplicationToolbar,
    RavagoEntityDropdown,
    CustomerDropdown
  ],
  providers: [
    AuthInterceptor
  ]
})
export class SharedModule {
}
