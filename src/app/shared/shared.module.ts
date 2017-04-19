import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Router} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class SharedModule {
}
