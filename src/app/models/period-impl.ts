import {Period} from "../commission-back-end.service";
export class PeriodImpl implements Period{
  startDate:string;
  endDate:string;

  constructor(startDate:string, endDate?:string) {
    this.startDate = startDate;
    if (endDate != "") {
      this.endDate = endDate;
    }
  }
}
