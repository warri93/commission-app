import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {SalesPerson} from "../master-data.service";

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.html',
  styleUrls: ['./sales-person.css']
})
export class SalesPersonComponent implements OnInit {

  @Input('group')
  public salesPersonForm: FormGroup;

  @Input('salespersonlist')
  public salespersonslist : SalesPerson[];

  constructor() { }

  ngOnInit() {
  }

}
