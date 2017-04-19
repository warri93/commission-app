/*
 import {NgModule} from '@angular/core';

 import {ApplicationToolbar} from "./applicaction-toolbar/application-toolbar.component";

 @NgModule({
 declarations: [
 ApplicationToolbar
 ],
 exports: [
 ApplicationToolbar
 ]
 })

 export class CommissionAppModule {
 }
 */

import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';

import {ApplicationToolbar} from "../shared/applicaction-toolbar/application-toolbar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule],
  declarations: [ApplicationToolbar],
  exports: [ApplicationToolbar, CommonModule, FormsModule]
})
export class CommissionAppModule {
}
