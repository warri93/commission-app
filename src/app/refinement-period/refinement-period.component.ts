import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from "@angular/forms";
import {SalesPerson} from "../master-data.service";

@Component({
  selector: 'app-refinement-period',
  templateUrl: './refinement-period.html',
  styleUrls: ['./refinement-period.css']
})
export class RefinementPeriodComponent implements OnInit {

  @Input('salespersonlist')
  public salespersonslist:SalesPerson[];

  @Input('periodGroup')
  public createRefinementPeriodForm:FormGroup;

  constructor(private _fb:FormBuilder) {
  }

  ngOnInit() {

  }

  public addSalesPerson() {
    const control = <FormArray>this.createRefinementPeriodForm.controls['salespersons'];
    control.push(this.initSalesPerson());
  }

  private initSalesPerson() {
    console.log("init salespersons");
    return this._fb.group({
      salesperson: [''],
      selectcommission: [''],
      selectSalesVolume: ['']
    });
  }
}
