import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {ComponentsModule} from "./components/components.module";
import {AppRoutingModule} from './app.routing';
import {SharedModule} from "./components/shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
